import * as S from './styles'
import AlertIcon from 'components/AlertIcon'
import AlertList from 'components/AlertList'
import Dropdown from 'components/Dropdown'
import MediaMatch from 'components/MediaMatch'
import Modal from 'components/Modal'
import { useState } from 'react'

const AlertDropdown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <>
      <MediaMatch $lessThan="medium">
        <Modal
          isOpen={isOpenModal}
          closeModal={() => setIsOpenModal(false)}
          full
        >
          <AlertList closeModal={() => setIsOpenModal(false)} />
        </Modal>
        <S.Icon onClick={() => setIsOpenModal(true)}>
          <AlertIcon />
        </S.Icon>
      </MediaMatch>
      <MediaMatch $greaterThan="medium">
        <Dropdown
          title={
            <S.Icon>
              <AlertIcon />
            </S.Icon>
          }
        >
          <AlertList />
        </Dropdown>
      </MediaMatch>
    </>
  )
}

export default AlertDropdown

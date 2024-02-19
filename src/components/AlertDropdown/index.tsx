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
      <Modal isOpen={isOpenModal} closeModal={() => setIsOpenModal(false)}>
        <AlertList />
      </Modal>
      <MediaMatch $lessThan="medium">
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

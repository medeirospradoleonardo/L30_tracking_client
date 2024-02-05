import * as S from './styles'
import AlertIcon from 'components/AlertIcon'
import AlertList from 'components/AlertList'
import Dropdown from 'components/Dropdown'

const AlertDropdown = () => {
  return (
    <Dropdown
      title={
        <S.Icon>
          <AlertIcon />
        </S.Icon>
      }
    >
      <AlertList />
    </Dropdown>
  )
}

export default AlertDropdown

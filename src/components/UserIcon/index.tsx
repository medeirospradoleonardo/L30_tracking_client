import { HiMiniPlay, HiOutlineUserCircle } from 'react-icons/hi2'
import * as S from './styles'

type UserIconProps = {
  firstName: string
}

const UserIcon = ({ firstName }: UserIconProps) => {
  return (
    <S.Wrapper>
      <HiOutlineUserCircle size={25} />
      <S.Username>{firstName}</S.Username>
      <S.Icon>
        <HiMiniPlay size={10} style={{ transform: 'rotate(90deg)' }} />
      </S.Icon>
    </S.Wrapper>
  )
}

export default UserIcon

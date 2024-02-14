import { HiOutlineBell } from 'react-icons/hi2'
import * as S from './styles'

type AlertIconProps = {
  quantity?: number
}

const AlertIcon = ({ quantity = 1 }: AlertIconProps) => {
  return (
    <S.Wrapper>
      {quantity > 0 && (
        <S.Badge aria-label="Cart Items" $overflow={quantity > 99}>
          {quantity > 99 ? '99+' : quantity}
        </S.Badge>
      )}
      <HiOutlineBell size={25} />
    </S.Wrapper>
  )
}

export default AlertIcon

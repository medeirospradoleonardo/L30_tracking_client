import { HiOutlineBell } from 'react-icons/hi2'
import * as S from './styles'
import { useAlert } from 'hooks/use-alert'

const AlertIcon = () => {
  const { quantity } = useAlert()
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

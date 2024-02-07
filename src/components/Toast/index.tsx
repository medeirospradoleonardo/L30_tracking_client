import { HiOutlineXMark } from 'react-icons/hi2'
import * as S from './styles'
import useTimeout from 'utils/usetimeout'

export type ToastProps = {
  title: string
  width?: number
  height?: number
  duration?: number
  close: () => void
}

const Toast = ({
  title,
  width = 320,
  height = 100,
  duration = 5,
  close
}: ToastProps) => {
  useTimeout({
    callback: close,
    delay: 5000
  })

  return (
    <S.Container width={width} height={height}>
      <S.ToastHeader>
        <S.Left>
          <h3>{title}</h3>
        </S.Left>
        <S.Right>
          <S.Icon onClick={close}>
            <HiOutlineXMark size={25} />
          </S.Icon>
        </S.Right>
      </S.ToastHeader>
      <S.ProgressBar duration={duration}></S.ProgressBar>
    </S.Container>
  )
}

export default Toast

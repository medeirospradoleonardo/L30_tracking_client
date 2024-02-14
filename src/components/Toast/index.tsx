import {
  HiOutlineXMark,
  HiExclamationCircle,
  HiCheckCircle
} from 'react-icons/hi2'
import * as S from './styles'
import { CSSProperties, useState } from 'react'
import { useToast } from 'hooks/use-toast'

import { PositionOptions } from 'components/ToastContainer'

export type ToastTypes = 'default' | 'error' | 'warning' | 'success'

export type ToastProps = {
  id: string
  title: string
  width?: number
  height?: number
  autoClose: number | false
  closeOnClick?: boolean
  pauseOnHover: boolean
  hideProgressBar: boolean
  position: PositionOptions
  style?: CSSProperties | undefined
  type: ToastTypes
  colored: boolean
  isPaused: boolean
  isPromise: boolean
}

const Toast = ({
  id,
  title,
  width = 320,
  height = 100,
  autoClose,
  closeOnClick,
  pauseOnHover,
  hideProgressBar,
  style,
  type,
  colored,
  position,
  isPaused,
  isPromise
}: ToastProps) => {
  const { close } = useToast()
  const [animationEnd, setAnimationEnd] = useState(false)

  const getComponentType = (type: ToastTypes) => {
    switch (type) {
      case 'error':
        return <HiExclamationCircle size={40} />
      case 'warning':
        return <HiExclamationCircle size={40} />
      case 'success':
        return <HiCheckCircle size={40} />
      default:
        return null
    }
  }

  return (
    <>
      {isPromise ? (
        <S.Container
          style={style && style}
          $width={width}
          $closeOnClick={false}
          $pauseOnHover={false}
          $toastType="default"
          $animationEnd={false}
          $position={position}
        >
          <S.ToastHeader>
            <S.Left>
              <S.PromiseIcon />
              <S.Title $isPromise={isPromise} $colored={colored}>
                {title}
              </S.Title>
            </S.Left>
          </S.ToastHeader>
        </S.Container>
      ) : (
        <S.Container
          onClick={() => (closeOnClick ? setAnimationEnd(true) : null)}
          onAnimationEnd={() => animationEnd && close(id)}
          style={style && style}
          $width={width}
          $closeOnClick={closeOnClick}
          $pauseOnHover={pauseOnHover}
          $toastType={colored ? type : 'default'}
          $animationEnd={animationEnd}
          $position={position}
          // draggable={true}
        >
          <S.ToastHeader>
            <S.Left>
              {type != 'default' && (
                <S.Icon $type={type} $colored={colored}>
                  {getComponentType(type)}
                </S.Icon>
              )}
              <S.Title $colored={colored}>{title}</S.Title>
            </S.Left>
            <S.Right>
              <S.CloseIcon
                onClick={() => setAnimationEnd(true)}
                $colored={colored}
              >
                <HiOutlineXMark size={25} />
              </S.CloseIcon>
            </S.Right>
          </S.ToastHeader>

          <S.ProgressBar
            onAnimationEnd={() => setAnimationEnd(true)}
            $type={type}
            $duration={autoClose}
            $hideProgressBar={hideProgressBar}
            $colored={colored}
            $isPaused={isPaused}
          />
        </S.Container>
      )}
    </>
  )
}

export default Toast

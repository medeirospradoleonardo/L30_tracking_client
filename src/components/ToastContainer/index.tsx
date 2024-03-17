import Toast, { ToastProps } from 'components/Toast'
import * as S from './styles'
// import { CSSProperties } from 'styled-components'

export type PositionOptions =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center'

type ToastContainerProps = {
  toasts: ToastProps[]
  position?: PositionOptions
  limit?: number | false
}

// const switchPosition = (position: PositionOptions) => {
//   switch (position) {
//     case 'top-left':
//       return { top: '80px', left: '35px' } as CSSProperties
//     case 'top-right':
//       return { top: '80px', right: '35px' } as CSSProperties
//     case 'top-center':
//       return { top: '80px', left: 'calc(50vw - 160px)' } as CSSProperties
//     case 'bottom-left':
//       return { bottom: '1vh', left: '35px' } as CSSProperties
//     case 'bottom-right':
//       return { bottom: '1vh', right: '35px' } as CSSProperties
//     case 'bottom-center':
//       return { bottom: '1vh', left: 'calc(50vw - 160px)' } as CSSProperties
//     default:
//       return undefined
//   }
// }

const generateToastComponents = (
  toasts: ToastProps[],
  limit: number | false
) => {
  return toasts.map(
    (toast, index) =>
      (!limit || (limit && index < limit)) && (
        <Toast
          id={toast.id}
          title={toast.title}
          key={toast.id}
          autoClose={toast.autoClose}
          closeOnClick={toast.closeOnClick}
          pauseOnHover={toast.pauseOnHover}
          hideProgressBar={toast.hideProgressBar}
          type={toast.type}
          colored={toast.colored}
          isPaused={toast.isPaused}
          isPromise={toast.isPromise}
          position={toast.position}
          style={
            toasts.length != index + 1
              ? { marginBottom: '20px' }
              : { marginBottom: '10px' }
          }
        />
      )
  )
}

const ToastContainer = ({ toasts, limit = 1 }: ToastContainerProps) => {
  const toastsTopLeft = toasts.filter((t) => t.position == 'top-left')
  const toastsTopRight = toasts.filter((t) => t.position == 'top-right')
  const toastsTopCenter = toasts.filter((t) => t.position == 'top-center')
  const toastsBottomLeft = toasts.filter((t) => t.position == 'bottom-left')
  const toastsBottomRight = toasts.filter((t) => t.position == 'bottom-right')
  const toastsBottomCenter = toasts.filter((t) => t.position == 'bottom-center')

  return (
    <>
      {toastsTopLeft.length > 0 && (
        <S.ContainerTopLeft>
          {generateToastComponents(toastsTopLeft, limit)}
        </S.ContainerTopLeft>
      )}

      {toastsTopRight.length > 0 && (
        <S.ContainerTopRight>
          {generateToastComponents(toastsTopRight, limit)}
        </S.ContainerTopRight>
      )}

      {toastsTopCenter.length > 0 && (
        <S.ContainerTopCenter>
          {generateToastComponents(toastsTopCenter, limit)}
        </S.ContainerTopCenter>
      )}

      {toastsBottomLeft.length > 0 && (
        <S.ContainerBottomLeft>
          {generateToastComponents(toastsBottomLeft, limit)}
        </S.ContainerBottomLeft>
      )}

      {toastsBottomRight.length > 0 && (
        <S.ContainerBottomRight>
          {generateToastComponents(toastsBottomRight, limit)}
        </S.ContainerBottomRight>
      )}

      {toastsBottomCenter.length > 0 && (
        <S.ContainerBottomCenter>
          {generateToastComponents(toastsBottomCenter, limit)}
        </S.ContainerBottomCenter>
      )}
    </>
  )
}

export default ToastContainer

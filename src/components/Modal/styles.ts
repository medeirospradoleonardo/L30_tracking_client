import { css, styled } from 'styled-components'

// export const Wrapper = styled.div`
//   background-color: rgba(0, 0, 0, 0.1);
//   width: 100vw;
//   height: 100vh;
//   z-index: 0;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   position: absolute;
// `

// export const Modal = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);

//   width: 250px;
//   height: 170px;
//   background: white;
//   color: black;
//   z-index: 10;
//   border-radius: 16px;
//   box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
// `

export const Modal = styled.div`
  ${({ theme }) => css`
    /* display: flex; */
    /* flex-direction: column; */
    background: ${theme.colors.white};
    color: ${theme.colors.black};

    width: 250px;
    height: 170px;
    /* position: fixed; */
    top: 50%;
    left: 50%;

    border-radius: 5px;

    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

type WrapperProps = {
  open?: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, open }) => css`
    position: relative;
    width: max-content;

    ${Modal}, ${Overlay} {
      transition:
        transform 0.2s ease-in,
        transform 0.2s ease-out,
        opacity ${theme.transition.default};

      ${open && wrapperModifiers.open()}
      ${!open && wrapperModifiers.close()}
    }
  `}
`

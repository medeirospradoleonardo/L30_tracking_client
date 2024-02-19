import styled, { css } from 'styled-components'

export const ContainerTopLeft = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.toast};
  `}

  position: fixed;
  top: 64px;
  left: 0px;
  width: 356px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`
export const ContainerTopRight = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.toast};
  `}

  position: fixed;
  top: 64px;
  right: 0px;
  width: 356px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`
export const ContainerTopCenter = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.toast};
  `}

  position: fixed;
  top: 0px;
  left: 50%;
  width: 356px;
  padding-top: 64px;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: hidden;
`
export const ContainerBottomLeft = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.toast};
  `}

  position: fixed;
  bottom: 16px;
  left: 0px;
  width: 356px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`
export const ContainerBottomRight = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.toast};
  `}

  position: fixed;
  bottom: 16px;
  right: 0px;
  width: 366px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`
export const ContainerBottomCenter = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.toast};
  `}

  position: fixed;
  bottom: 16px;
  left: 50%;
  width: 356px;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

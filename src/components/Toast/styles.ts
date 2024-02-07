import styled, { css, keyframes } from 'styled-components'

type ContainerProps = {
  width: number
  height: number
}

export const Container = styled.div<ContainerProps>`
  /* margin: 100px; */
  ${({ theme, width, height }) => css`
    background: ${theme.colors.gray};
    width: ${width}px;
    height: ${height}px;
    border-radius: 5px;
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    position: relative;
  `}
`

export const ToastHeader = styled.div`
  width: 100%;
  ${({ theme }) => css`
    background: ${theme.colors.gray};
  `}
  display: flex;
  padding: 10px;
  border-radius: 5px;
`

export const Icon = styled.div`
  cursor: pointer;
  height: max-content;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    &:hover {
      color: ${theme.colors.primary};
      transition: none;
    }
  `}
`

export const Left = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    color: ${theme.colors.font};
  `}
`

export const Right = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    color: ${theme.colors.font};
  `}
`

type ProgressBarProps = {
  duration: number
}

export const ProgressBar = styled.div<ProgressBarProps>`
  ${({ theme, duration }) => css`
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: relative;
    overflow: hidden;

    margin-top: auto;
    &:after {
      content: '';
      box-sizing: border-box;
      width: 0;
      height: 4.8px;
      background: ${theme.colors.primary};
      position: absolute;
      top: 0;
      left: 0;
      animation: ${animFw} ${duration}s linear infinite;
    }
  `}
`

const animFw = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`

import styled, { css } from 'styled-components'

export const Icon = styled.div`
  transition: transform 0.15s linear;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  transition-delay: 0s;
  transition-property: transform;
  will-change: transform;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  &:hover {
    ${Icon} {
      transform: rotate(180deg);
    }
  }
`
export const Username = styled.span`
  ${({ theme }) => css`
    /* padding: 0 ${theme.spacings.xxsmall}; */
    padding-left: ${theme.spacings.xxsmall};
    font-weight: ${theme.font.normal};
  `}
`

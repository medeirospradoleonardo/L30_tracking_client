import styled, { css } from 'styled-components'

export const Icon = styled.div`
  cursor: pointer;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;

  ${({ theme }) => css`
    color: ${theme.colors.font};

    &:hover {
      color: ${theme.colors.primary};
      background: ${theme.colors.hover};
      transition: none;
    }
  `}
`

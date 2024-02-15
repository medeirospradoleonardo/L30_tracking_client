import Dropdown from 'components/Dropdown'
import {
  Wrapper as DropdownWrapper,
  Title as DropdownTitle
} from 'components/Dropdown/styles'
import styled, { css } from 'styled-components'

export const Icon = styled.div`
  cursor: pointer;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
`

// export const DropdownCustom = styled(Dropdown)`
//   ${({ theme }) => css`
//     ${DropdownWrapper} {
//       background: ${theme.colors.black};
//     }
//     /* &:hover {
//       ${DropdownTitle} {
//         color: ${theme.colors.primary};
//         background: ${theme.colors.hover};
//         transition: none;
//       }
//     } */
//   `}
// `

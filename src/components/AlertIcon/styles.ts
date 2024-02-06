import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  position: relative;
`

const BadgeModifiers = {
  overflow: () => css`
    /* width: 2rem;
    height: 2rem;
    top: -0.8rem;
    right: -0.8rem; */
    font-size: 0.8rem;
  `
}

type BadgeProps = {
  overflow: string
}

export const Badge = styled.span<BadgeProps>`
  ${({ theme, overflow }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-size: 1rem;
    border-radius: 50%;
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;

    ${overflow == 'true' && BadgeModifiers.overflow()}
  `}
`

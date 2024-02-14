import { css, keyframes } from 'styled-components'

const animation = () => css`
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
`

export const bounceInRight = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    ${animation};
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
`

export const bounceOutRight = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(500px, 0, 0);
  }
`

export const bounceInLeft = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    ${animation};
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
`

export const bounceOutLeft = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`

export const bounceInUp = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    ${animation};
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`

export const bounceOutUp = keyframes`
  20% {
    transform: translate3d(0, calc(0 - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(0 + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  /* 20% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  } */
`

export const bounceInDown = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    ${animation};
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
`

export const bounceOutDown = keyframes`
  20% {
    transform: translate3d(0, calc(0 - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(0 + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`

const bounce_enter = keyframes`
  /* &--top-left,
  &--bottom-left {
    animation-name: ${bounceInLeft};
  }
  &--top-right,
  &--bottom-right {
    animation-name: ${bounceInRight};
  }
  &--top-center {
    animation-name: ${bounceInDown};
  }
  &--bottom-center {
    animation-name: ${bounceInUp};
  } */
`

const bounce_exit = keyframes`

  /* &--top-left,
  &--bottom-left {
    animation-name: ${bounceOutLeft};
  }
  &--top-right,
  &--bottom-right {
    animation-name: ${bounceOutRight};
  }
  &--top-center {
    animation-name: ${bounceOutDown};
  }
  &--bottom-center {
    animation-name: ${bounceOutUp};
  } */
`

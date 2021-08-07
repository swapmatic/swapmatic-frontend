import { keyframes } from 'styled-components'

export const pulseRad = keyframes`
  0% {
    box-shadow: 0px 0px 15px var(--color-primary)
  } 50% {
    box-shadow: 0px 0px 8px var(--color-primary)
  } 100% {
    box-shadow: 0px 0px 15px var(--color-primary)
  }
`

export const fadeinFromBottom = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

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

import styled, { css } from 'styled-components'

// Animations
import { pulseRad } from '@/styles/animations'

// Types
import { IButtonProps } from './index'
type IContainerProps = Pick<IButtonProps, 'colorVariant' | 'sizeVariant'>

const colorsVariants = {
  primary: css`
    background-color: var(--color-primary);
    color: var(--color-white);
    animation: ${pulseRad} ease-in-out 4s infinite;
  `,
  primaryReverse: css`
    background-color: transparent;
    border-color: var(--color-primary);
    color: var(--color-primary);
    animation: ${pulseRad} ease-in-out 4s infinite;
  `,
  white: css`
    background-color: var(--color-white);
    color: var(--color-black);
  `,
  whiteReverse: css`
    background-color: transparent;
    border-color: var(--color-white);
    color: var(--color-white);
  `
}

const sizesVariants = {
  small: css`
    height: 1.56rem;
    width: 7.5rem;
    font-size: var(--text-size-body-3);
    font-weight: var(--text-weight-body-3);
  `,
  medium: css`
    height: 2.5rem;
    width: 9.38rem;
    font-size: var(--text-size-body-1);
    font-weight: var(--text-weight-body-1);
  `
}

export const Container = styled.button<IContainerProps>`
  border: 1px solid transparent;
  outline: none;
  border-radius: var(--border-radius);
  text-transform: capitalize;
  transition: all 0.5s;
  ${props => colorsVariants[props.colorVariant]};
  ${props => sizesVariants[props.sizeVariant]};
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.5);
  }
`

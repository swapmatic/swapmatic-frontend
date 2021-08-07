import styled, { css } from 'styled-components'

// Animations
import { pulseRad } from '@/styles/animations'

// Types
import { IButtonProps } from './index'
type IContainerProps = Pick<
  IButtonProps,
  | 'colorVariant'
  | 'sizeVariant'
  | 'marginLeft'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
>

export const colorsVariants = {
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

export const sizesVariants = {
  small: css`
    height: 1.8rem;
    width: 7.5rem;
    font-size: 0.8rem;
    font-weight: 700;
  `,
  medium: css`
    height: 2.5rem;
    width: 9.38rem;
    font-size: 0.9rem;
    font-weight: 700;
  `,
  large: css`
    height: 3rem;
    width: 13rem;
    font-size: 1rem;
    font-weight: 700;
  `,
  max: css`
    height: 2.5rem;
    width: 100%;
    font-size: 1rem;
    font-weight: 700;
  `
}

export const Container = styled.button<IContainerProps>`
  border: 1px solid transparent;
  outline: none;
  border-radius: var(--border-radius);
  text-transform: capitalize;
  transition: all 0.5s;
  margin-left: ${props => props.marginLeft || '0'};
  margin-top: ${props => props.marginTop || '0'};
  margin-right: ${props => props.marginRight || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  ${props => colorsVariants[props.colorVariant]};
  ${props => sizesVariants[props.sizeVariant]};
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.5);
  }
`

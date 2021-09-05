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
  | 'margin'
>

export const colorsVariants = {
  primary: css`
    background-color: var(--color-primary);
    color: var(--color-white);
    // animation: ${pulseRad} ease-in-out 4s infinite;
  `,
  primaryReverse: css`
    background-color: transparent;
    border-color: var(--color-primary);
    color: var(--color-primary);
    // animation: ${pulseRad} ease-in-out 4s infinite;
  `,
  white: css`
    background-color: var(--color-white);
    color: var(--color-black);
  `,
  whiteReverse: css`
    background-color: transparent;
    border-color: var(--color-white);
    color: var(--color-white);
  `,
  danger: css`
    background-color: var(--color-danger);
    color: var(--color-white);
  `,
  warning: css`
    background-color: var(--color-warning);
    color: var(--color-white);
  `,
  metamask: css`
    background-color: var(--color-metamask);
    color: var(--color-black);
  `,
  polygon: css`
    background-color: var(--color-polygon);
    color: var(--color-black);
  `,
  chart: css`
    background-color: var(--color-chart);
    color: var(--color-black);
  `,
  swapman: css`
    background-color: var(--color-swapman);
    color: var(--color-black);
  `
}

export const sizesVariants = {
  small: css`
    height: 1.8rem;
    width: 7.5rem;
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0 0.3rem;
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
    font-size: 0.8rem;
    font-weight: 700;
  `
}

export const Container = styled.button<IContainerProps>`
  border: 1px solid transparent;
  outline: none;
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: all 0.5s;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${props => props.marginLeft || 'inherit'};
  margin-top: ${props => props.marginTop || 'inherit'};
  margin-right: ${props => props.marginRight || 'inherit'};
  margin-bottom: ${props => props.marginBottom || 'inherit'};
  ${props => colorsVariants[props.colorVariant]};
  ${props => sizesVariants[props.sizeVariant]};
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.5);
  }

  & > svg {
    margin-right: 0.5rem;
  }
`

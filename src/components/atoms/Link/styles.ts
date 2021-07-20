import styled, { css } from 'styled-components'

// Types
import { ILinkProps } from './index'
type IContainerProps = Pick<ILinkProps, 'colorVariant'>

// Styles
const colorsVariants = {
  black: css`
    color: var(--color-black);
  `,
  white: css`
    color: var(--color-white);
  `,
  primary: css`
    color: var(--color-primary);
  `
}

export const Container = styled.a<IContainerProps>`
  font-size: var(--text-size-body-2);
  font-weight: var(--text-weight-body-2);
  ${props => colorsVariants[props.colorVariant]}
`

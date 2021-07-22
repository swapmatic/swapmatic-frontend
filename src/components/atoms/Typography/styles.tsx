import styled, { css } from 'styled-components'

import { ITypographyProps } from './index'

interface IContainerProps extends ITypographyProps {
  styles?: string
}

export const parsedTypographys = {
  heading1: {
    tag: 'h1',
    style: css`
      font-size: 2.25rem;
      font-weight: 700;
      letter-spacing: 0.05em;
    `
  },
  heading2: {
    tag: 'h2',
    style: css`
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.05em;
    `
  },
  heading3: {
    tag: 'h3',
    style: css`
      font-size: 1.125rem;
      font-weight: 700;
      letter-spacing: 0.05em;
    `
  },
  body1: {
    tag: 'span',
    style: css`
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 0.05em;
    `
  },
  body2: {
    tag: 'span',
    style: css`
      font-size: 0.9rem;
      font-weight: 400;
      letter-spacing: 0.05em;
    `
  },
  body3: {
    tag: 'span',
    style: css`
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.05em;
    `
  },
  body4: {
    tag: 'span',
    style: css`
      font-size: 0.8rem;
      font-weight: 400;
      letter-spacing: 0.05em;
    `
  },
  div: {
    tag: 'div',
    style: css``
  }
}

export const Container = styled('div').attrs<ITypographyProps>(
  ({ as = 'heading1' }) => ({
    styles: parsedTypographys[as].style,
    as: parsedTypographys[as].tag
  })
)<IContainerProps>`
  ${props => props.styles}
`

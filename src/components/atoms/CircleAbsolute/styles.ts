import styled, { keyframes } from 'styled-components'

import { ICircleAbsoluteProps } from './index'

const flyEffect = keyframes`
  ${'0%'} {transform: translateY(0)}
  ${'25%'} {transform: translateY(5%)}
  ${'50%'} {transform: translateY(10%)}
  ${'75%'} {transform: translateY(5%)}
  ${'100%'} {transform: translateY(0%)}
`

export const Container = styled.div<ICircleAbsoluteProps>`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  top: ${props => props.top || 'inherit'};
  right: ${props => props.right || 'inherit'};
  bottom: ${props => props.bottom || 'inherit'};
  left: ${props => props.left || 'inherit'};
  animation-name: ${flyEffect};
  animation: ${flyEffect} 10s ease-in-out infinite;

  border-radius: 100%;

  background: linear-gradient(
    180deg,
    rgba(21, 58, 113, 0.4) 0%,
    rgba(40, 145, 249, 0.4) 100%
  );
  transform: rotate(124.14deg);

  z-index: -2;
  pointer-events: none;
`

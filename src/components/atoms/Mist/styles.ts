import styled from 'styled-components'

import { IMistProps } from './index'

export const Container = styled.div<IMistProps>`
  position: absolute;
  display: unset;

  width: 884.93px;
  height: 884.93px;

  background: linear-gradient(
    180deg,
    rgba(21, 58, 113, 0.5) 0%,
    rgba(40, 145, 249, 0.5) 100%
  );
  filter: blur(1000px);
  transform: rotate(124.14deg);
  z-index: -2;

  top: ${props => props.top || 'inherit'};
  right: ${props => props.right || 'inherit'};
  bottom: ${props => props.bottom || 'inherit'};
  left: ${props => props.left || 'inherit'};
`

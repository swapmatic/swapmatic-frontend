import styled from 'styled-components'

import { ITransientShadowProps } from './index'

export const Container = styled.div<ITransientShadowProps>`
  right: ${props => props.right || 'inherit'};
  top: ${props => props.top || 'inherit'};
  bottom: ${props => props.bottom || 'inherit'};
  left: ${props => props.left || 'inherit'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '6rem'};

  position: absolute;
  pointer-events: none;

  background: linear-gradient(
    180deg,
    #000000 0%,
    #000000 22.4%,
    rgba(0, 0, 0, 0) 100%
  );

  z-index: 0;
  transform: ${props =>
    props.position !== 'top' ? 'rotate(-180deg)' : 'rotate(0deg)'};
`

import styled from 'styled-components'

import { IPosition } from './index'

export const Container = styled.div<IPosition>`
  position: absolute;
  top: ${props => props.top || 'inherit'};
  right: ${props => props.right || 'inherit'};
  bottom: ${props => props.bottom || 'inherit'};
  left: ${props => props.left || 'inherit'};
  transform: translate(
    ${props => props.translation?.x || 'inherit'},
    ${props => props.translation?.y || 'inherit'}
  );
  width: ${props => `${props.width}px` || 'inherit'};
  height: ${props => `${props.height}px` || 'inherit'};
  z-index: ${props => props.zIndex || -1};
  pointer-events: none;

  & > svg {
    width: ${props => `${props.width}px` || 'inherit'};
    height: ${props => `${props.height}px` || 'inherit'};
  }
`

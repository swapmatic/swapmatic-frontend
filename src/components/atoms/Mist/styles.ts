import styled from 'styled-components'

import { IMistProps } from './index'

export const Container = styled.div<IMistProps>`
  position: fixed;

  width: 100%;
  height: 100vh;

  background: radial-gradient(#04101c 0%, var(--color-black) 100%) 0% 0% /
    contain;
  z-index: -2;

  top: ${props => props.top || 'inherit'};
  right: ${props => props.right || 'inherit'};
  bottom: ${props => props.bottom || 'inherit'};
  left: ${props => props.left || 'inherit'};

  pointer-events: none;
`

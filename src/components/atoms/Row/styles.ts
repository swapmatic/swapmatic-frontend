import styled from 'styled-components'

import { IRowProps } from './index'

export const Container = styled.div<IRowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
`

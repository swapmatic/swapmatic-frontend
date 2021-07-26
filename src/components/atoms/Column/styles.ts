import styled from 'styled-components'

import { IColumnProps } from './index'

export const Container = styled.div<IColumnProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
`

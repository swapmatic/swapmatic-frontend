import styled from 'styled-components'
import { IAnchorProps } from './index'

export const Container = styled.a<IAnchorProps>`
  margin-top: ${props => props.marginTop || 'inherit'};
  margin-right: ${props => props.marginRight || 'inherit'};
  margin-bottom: ${props => props.marginBottom || 'inherit'};
  margin-left: ${props => props.marginLeft || 'inherit'};
  transition: all 0.5s;
  text-decoration: none;

  &:hover {
    filter: brightness(0.8);
  }
`

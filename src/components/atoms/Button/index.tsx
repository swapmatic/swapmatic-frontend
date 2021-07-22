// External libs

// Assets

// Componentes

// Subcomponentes and style
import { ButtonHTMLAttributes } from 'react'
import * as Styled from './styles'

// Services

// Types
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sizeVariant: 'small' | 'medium'
  colorVariant: 'primary' | 'primaryReverse' | 'white' | 'whiteReverse'
  marginLeft?: string
  marginTop?: string
  marginRight?: string
  marginBottom?: string
}

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return <Styled.Container {...rest}>{children}</Styled.Container>
}

export default Button

// External libs

// Assets

// Componentes

// Subcomponentes and style
import { InputHTMLAttributes, useState } from 'react'
import * as Styled from './styles'

// Services

// Types
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input: React.FC<IInputProps> = ({ label, ...rest }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <Styled.Container>
      <Styled.Content isActive={isActive}>
        {label && <Styled.Label isActive={isActive}>{label}</Styled.Label>}
        <Styled.Input
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          {...rest}
        />
      </Styled.Content>
    </Styled.Container>
  )
}

export default Input

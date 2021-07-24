// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface ICircleAbsoluteProps {
  size: string
  top?: string
  right?: string
  bottom?: string
  left?: string
}

const CircleAbsolute: React.FC<ICircleAbsoluteProps> = ({ ...rest }) => {
  return <Styled.Container {...rest} />
}

export default CircleAbsolute

// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface ITransientShadowProps {
  width?: string
  height?: string
  top?: string
  right?: string
  bottom?: string
  left?: string
  position: 'bottom' | 'top'
}

const TransientShadow: React.FC<ITransientShadowProps> = ({ ...rest }) => {
  return <Styled.Container {...rest} />
}

export default TransientShadow

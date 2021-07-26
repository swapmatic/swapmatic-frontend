// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface IMistProps {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

const Mist: React.FC<IMistProps> = ({ ...rest }) => {
  return <Styled.Container {...rest} />
}

export default Mist

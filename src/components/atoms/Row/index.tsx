// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface IRowProps {
  justifyContent?: 'center' | 'flex-start' | 'flex-end'
  alignItems?: 'center' | 'flex-start' | 'flex-end'
}

const Row: React.FC<IRowProps> = ({ children, ...rest }) => {
  return <Styled.Container {...rest}>{children}</Styled.Container>
}

export default Row

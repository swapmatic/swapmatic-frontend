// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface IColumnProps {
  justifyContent?: 'center' | 'flex-start' | 'flex-end'
  alignItems?: 'center' | 'flex-start' | 'flex-end'
}

const Column: React.FC<IColumnProps> = ({ children, ...rest }) => {
  return <Styled.Container {...rest}>{children}</Styled.Container>
}

export default Column

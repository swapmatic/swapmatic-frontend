// External libs

// Assets

// Componentes

// Subcomponentes and style
import { AnchorHTMLAttributes } from 'react'
import * as Styled from './styles'

// Services

// Types
export interface IAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const Anchor: React.FC<IAnchorProps> = ({ children, ...rest }) => {
  return <Styled.Container {...rest}>{children}</Styled.Container>
}

export default Anchor

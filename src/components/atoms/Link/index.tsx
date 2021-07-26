// External libs
import NextLink, { LinkProps } from 'next/link'

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Link: React.FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <NextLink {...rest}>
      <Styled.Container>{children}</Styled.Container>
    </NextLink>
  )
}

export default Link

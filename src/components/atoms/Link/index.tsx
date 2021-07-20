// External libs
import NextLink, { LinkProps } from 'next/link'

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface ILinkProps extends LinkProps {
  colorVariant: 'white' | 'black' | 'primary'
}

const Link: React.FC<ILinkProps> = ({ children, colorVariant, ...rest }) => {
  return (
    <NextLink {...rest}>
      <Styled.Container colorVariant={colorVariant}>
        {children}
      </Styled.Container>
    </NextLink>
  )
}

export default Link

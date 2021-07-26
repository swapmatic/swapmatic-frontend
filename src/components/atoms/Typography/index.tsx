// Subcomponentes and style
import * as Styled from './styles'

// Types
export interface ITypographyProps {
  as: keyof typeof Styled.parsedTypographys
  color?: string
  marginLeft?: string
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  align?: string
}

const Typography: React.FC<ITypographyProps> = ({ children, ...rest }) => {
  return <Styled.Container {...rest}>{children}</Styled.Container>
}

export default Typography

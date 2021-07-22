// Subcomponentes and style
import * as Styled from './styles'

// Types
export interface ITypographyProps {
  as: keyof typeof Styled.parsedTypographys
}

const Typography: React.FC<ITypographyProps> = ({ children, ...rest }) => {
  return <Styled.Container {...rest}>{children}</Styled.Container>
}

export default Typography

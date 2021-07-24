// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface IPosition {
  translation?: { x: string; y: string }
  top?: string
  right?: string
  left?: string
  bottom?: string
  width?: string | number
  height?: string | number
  zIndex?: number
}

export interface ISvgAbsoluteProps {
  src: string
  position: IPosition
}

const SvgAbsolute: React.FC<ISvgAbsoluteProps> = ({ src: Svg, position }) => {
  return (
    <Styled.Container {...position}>
      <Svg />
    </Styled.Container>
  )
}

export default SvgAbsolute

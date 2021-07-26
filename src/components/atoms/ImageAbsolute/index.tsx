// External libs
import Image, { ImageProps } from 'next/image'

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

export interface IImageAbsoluteProps {
  image: ImageProps
  position: IPosition
}

const ImageAbsolute: React.FC<IImageAbsoluteProps> = ({ image, position }) => {
  return (
    <Styled.Container height={image.height} width={image.width} {...position}>
      <Image {...image} />
    </Styled.Container>
  )
}

export default ImageAbsolute

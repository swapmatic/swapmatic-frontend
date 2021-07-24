// External libs

// Assets
import HeroImg from '../../../assets/imgs/hero.webp'

// Componentes
import ImageAbsolute from '@/components/atoms/ImageAbsolute'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const HeroImageArea: React.FC = () => {
  return (
    <Styled.Container>
      <ImageAbsolute
        image={{ src: HeroImg, alt: 'Swapmatic Hero' }}
        position={{
          right: '0',
          width: 343,
          height: 505
        }}
      />
    </Styled.Container>
  )
}

export default HeroImageArea

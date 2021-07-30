// External libs

// Assets
import HeroRadImg from '../../../assets/imgs/hero_rad.webp'

// Componentes
import ImageAbsolute from '@/components/atoms/ImageAbsolute'
import Wrapper from '@/components/atoms/Wrapper'
import HeroTextArea from '@/components/molecules/HeroTextArea'
import CircleAbsolute from '@/components/atoms/CircleAbsolute'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Hero: React.FC = () => {
  return (
    <Styled.Container id="home">
      <Wrapper>
        <Styled.Content>
          <HeroTextArea />
          <ImageAbsolute
            image={{
              src: HeroRadImg,
              alt: 'Swapmatic Hero',
              width: 712,
              height: 734,
              objectFit: 'contain'
            }}
            position={{
              top: '50%',
              translation: { x: '50%', y: '-50%' },
              zIndex: -1
            }}
          />
          <CircleAbsolute size="560px" top="-20%" right="75%" />
          <CircleAbsolute size="130px" top="70%" left="25%" />
          <CircleAbsolute size="54px" top="50%" left="40%" />
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Hero

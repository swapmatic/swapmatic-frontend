// External libs

// Assets

// Componentes
import Wrapper from '@/components/atoms/Wrapper'
import HeroTextArea from '@/components/molecules/HeroTextArea'
import HeroImageArea from '@/components/molecules/HeroImageArea'
import CircleAbsolute from '@/components/atoms/CircleAbsolute'
import Mist from '@/components/atoms/Mist'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Hero: React.FC = () => {
  return (
    <Styled.Container>
      <Wrapper>
        <Styled.Content>
          <HeroTextArea />
          <HeroImageArea />

          <Mist top="0" left="30%" />
          <CircleAbsolute size="560px" top="-20%" left="-40%" />
          <CircleAbsolute size="130px" top="70%" left="25%" />
          <CircleAbsolute size="54px" top="50%" left="40%" />
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Hero

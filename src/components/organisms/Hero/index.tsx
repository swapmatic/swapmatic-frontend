// External libs

// Assets

// Componentes
import Wrapper from '@/components/atoms/Wrapper'
import HeroTextArea from '@/components/molecules/HeroTextArea'
import HeroImageArea from '@/components/molecules/HeroImageArea'

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
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Hero

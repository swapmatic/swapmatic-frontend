// External libs

// Assets

// Componentes
import Wrapper from '@/components/atoms/Wrapper'
import HeroTextArea from '@/components/molecules/HeroTextArea'

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
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Hero

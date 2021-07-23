// External libs
import Image from 'next/image'

// Assets
import HeroImg from '../../../assets/imgs/hero.webp'

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

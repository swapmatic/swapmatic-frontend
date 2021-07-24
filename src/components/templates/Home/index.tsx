// External libs

// Assets

// Componentes
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import Mist from '@/components/atoms/Mist'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Home: React.FC = () => {
  return (
    <Styled.Container>
      <Header />
      <Hero />
      <Mist top="0" left="30%" />
    </Styled.Container>
  )
}

export default Home

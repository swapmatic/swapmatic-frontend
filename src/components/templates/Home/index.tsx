// External libs

// Assets

// Componentes
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import BestPrice from '@/components/organisms/BestPrice'
import Apps from '@/components/organisms/Apps'
import RoadMap from '@/components/organisms/RoadMap'
import Partnership from '@/components/organisms/Partnership'
import Topics from '@/components/organisms/Topics'
import Footer from '@/components/organisms/Footer'

// Subcomponentes and style
import * as Styled from './styles'
import Mist from '@/components/atoms/Mist'

// Services

// Types

const Home: React.FC = () => {
  return (
    <Styled.Container>
      <Mist />
      <Header />
      <Hero />
      <BestPrice />
      <Apps />
      <RoadMap />
      <Partnership />
      <Topics />
      <Footer />
    </Styled.Container>
  )
}

export default Home

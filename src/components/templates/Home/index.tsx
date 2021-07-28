// External libs

// Assets

// Componentes
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import BestPrice from '@/components/organisms/BestPrice'
import Apps from '@/components/organisms/Apps'
import RoadMap from '@/components/organisms/RoadMap'
import Team from '@/components/organisms/Team'
import Partnership from '@/components/organisms/Partnership'
import Topics from '@/components/organisms/Topics'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Home: React.FC = () => {
  return (
    <Styled.Container>
      <Header />
      <Hero />
      <BestPrice />
      <Apps />
      <RoadMap />
      <Team />
      <Partnership />
      <Topics />
    </Styled.Container>
  )
}

export default Home

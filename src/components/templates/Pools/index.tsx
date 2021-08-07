// External libs

// Assets

// Componentes
import Mist from '@/components/atoms/Mist'
import Header from '@/components/organisms/Header'
import PoolList from '@/components/organisms/PoolList'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Pools: React.FC = () => {
  return (
    <Styled.Container>
      <Mist />
      <Header />
      <PoolList />
    </Styled.Container>
  )
}

export default Pools

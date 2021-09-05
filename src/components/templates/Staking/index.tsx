// External libs

// Assets

// Componentes
import Mist from '@/components/atoms/Mist'
import Header from '@/components/organisms/Header'
import Stakinglist from '@/components/organisms/StakingList'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Staking: React.FC = () => {
  return (
    <Styled.Container>
      <Mist />
      <Header />
      <Stakinglist />
    </Styled.Container>
  )
}

export default Staking

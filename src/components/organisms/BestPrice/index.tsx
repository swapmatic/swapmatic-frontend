// External libs

// Assets

// Componentes
import Wrapper from '@/components/atoms/Wrapper'
import BkgVideo from '@/components/atoms/BkgVideo'
import TransientShadow from '@/components/atoms/TransientShadow'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const BestPrice: React.FC = () => {
  return (
    <Styled.Container>
      <TransientShadow position="top" height="10rem" />
      <BkgVideo />
      <Wrapper>
        <Styled.Content></Styled.Content>
      </Wrapper>
      <TransientShadow position="bottom" bottom="0" height="10rem" />
    </Styled.Container>
  )
}

export default BestPrice

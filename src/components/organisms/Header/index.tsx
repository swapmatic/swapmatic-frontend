// External libs

// Assets

// Componentes
import Menu from '@/components/molecules/Menu'
import Logo from '@/components/atoms/Logo'
import Wrapper from '@/components/atoms/Wrapper'
import Button from '@/components/atoms/Button'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Header: React.FC = () => {
  return (
    <Styled.Container>
      <Wrapper>
        <Styled.Content>
          <Logo type="logo" />
          <Menu />
          <Button
            marginLeft="auto"
            sizeVariant="small"
            colorVariant="primaryReverse"
          >
            Connect Wallet
          </Button>
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Header

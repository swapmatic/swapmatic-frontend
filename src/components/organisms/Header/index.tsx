// External libs

// Assets

// Componentes
import Menu from '@/components/molecules/Menu'
import Logo from '@/components/atoms/Logo'
import Wrapper from '@/components/atoms/Wrapper'
import Button from '@/components/atoms/Button'

// Subcomponentes and style
import * as Styled from './styles'
import { useState } from 'react'

// Services

// Types

const Header: React.FC = () => {
  const [isMenuToggle, setIsMenuToggle] = useState(false)

  return (
    <Styled.Container>
      <Wrapper>
        <Styled.Content>
          <Logo type="logo" />
          <Menu setIsMenuToggle={setIsMenuToggle} isMenuToggle={isMenuToggle} />
          <Styled.MenuToggleButton
            onClick={() => setIsMenuToggle(!isMenuToggle)}
          >
            <div />
            <div />
            <div />
          </Styled.MenuToggleButton>
          <Button
            marginLeft="auto"
            sizeVariant="small"
            colorVariant="primaryReverse"
            onClick={() => {}}
          >
            Connect Wallet
          </Button>
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Header

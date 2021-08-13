/* eslint-disable prettier/prettier */
// External libs
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import Menu from '@/components/molecules/Menu'
import Logo from '@/components/atoms/Logo'
import Wrapper from '@/components/atoms/Wrapper'
import Button from '@/components/atoms/Button'
import { colorsVariants } from '@/components/atoms/Button/styles'

// Subcomponentes and style
import * as Styled from './styles'
import { useState } from 'react'

// Services
import { injected } from '@/services/web3/wallet'
import { useStatus } from '@/services/web3/status'

// Types

const Header: React.FC = () => {
  const [isMenuToggle, setIsMenuToggle] = useState(false)

  const { setAttemptConnect, status, attemptConnect } = useStatus()
  const { active, account, activate, deactivate } =
    useWeb3React()

    interface ITextButtomObj {text: string | null | undefined, colorVariant: keyof typeof colorsVariants}

    interface ITextButton {
      'notconnected': ITextButtomObj
      'connected': ITextButtomObj
      'connecting': ITextButtomObj
      'wrongnetwork': ITextButtomObj
    }

    const textButton: ITextButton = {
      notconnected: { text: 'Connect Wallet', colorVariant: 'primaryReverse' },
      connected: { text: account, colorVariant: 'primary' },
      connecting: { text: 'Connecting...', colorVariant: 'warning' },
      wrongnetwork: { text: 'Wrong Network', colorVariant: 'danger' }
    }

    async function connect() {
      try {
        if (active) {
          deactivate()
        } else {
          if (!attemptConnect) {
            setAttemptConnect(true)
            await activate(injected)
            setAttemptConnect(false)
          }
        }
      } catch (err) {
        console.log(err)
      }
    }

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
            colorVariant={textButton[status].colorVariant}
            onClick={connect}
          >
            {textButton[status].text}
          </Button>
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
    )
}

export default Header

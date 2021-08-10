// External libs
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import Portis from '@portis/web3'

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

const providerOptions = {
  portis: {
    package: Portis, // required
    options: {
      // id: '8e23465f-c9a7-410a-92df-18b2e3d1c38f',
      // network: 'maticMumbai'
    }
  }
}

let provider = null
const web3 = null
let accounts = null

const Header: React.FC = () => {
  // let web3
  const [isMenuToggle, setIsMenuToggle] = useState(false)
  const [web3, setWeb3] = useState()

  /* const teste = async () => {
    // const teste2 = await web3.eth.net.getId()
    const teste3 = await web3.eth.accounts.wallet
  } */

  async function showPortis() {
    if (!provider) {
      const web3Modal = new Web3Modal({
        cacheProvider: true, // optional
        providerOptions // required
      })
      web3 = await connect(web3Modal)
    }
    if (!accounts) {
      accounts = await web3.eth.getAccounts()
    }
  }

  async function connect(web3Modal) {
    provider = await web3Modal.connect()
    return new Web3(provider)
  }

  /* useEffect(() => {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum)
      try {
        window.ethereum.enable().then(function () {
          // User has allowed account access to DApp...
          teste()
        })
      } catch (e) {
        // User has denied account access to DApp...
      }
    } else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider)
      alert('web33')
    } else {
      alert('You have to install MetaMask !')
    }
  }, []) */

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
            onClick={() => {
              showPortis()
            }}
          >
            Connect Wallet
          </Button>
          <Button
            marginLeft="auto"
            sizeVariant="small"
            colorVariant="primaryReverse"
            onClick={() => {
              getWallet()
            }}
          >
            teste
          </Button>
          <span id="userWalletAddress"></span>
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Header

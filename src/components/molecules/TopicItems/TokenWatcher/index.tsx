// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const TokenWatcher: React.FC = () => {
  return (
    <Styled.Container id="token">
      <iframe
        src="https://www.createmytoken.com/token-watcher/matic-mainnet/0x94c18174840f80d49d59dc3a1742af0b884a8184:735a7a6d6b62542e706e67/embed/"
        frameBorder="0"
        height="325"
        width="550"
        loading="eager"
        sandbox="allow-forms allow-modals allow-popups allow-scripts allow-same-origin"
        scrolling="no"
      />
    </Styled.Container>
  )
}

export default TokenWatcher

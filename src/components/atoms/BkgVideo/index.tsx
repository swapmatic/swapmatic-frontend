// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const BkgVideo: React.FC = () => {
  return (
    <Styled.Container>
      <video autoPlay muted loop id="myVideo">
        <source src="/network.mp4" type="video/mp4" />
      </video>
    </Styled.Container>
  )
}

export default BkgVideo

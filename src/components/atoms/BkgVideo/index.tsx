// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
interface IBkgVideoProps {
  video: string
}

const BkgVideo: React.FC<IBkgVideoProps> = ({ video }) => {
  return (
    <Styled.Container>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </Styled.Container>
  )
}

export default BkgVideo

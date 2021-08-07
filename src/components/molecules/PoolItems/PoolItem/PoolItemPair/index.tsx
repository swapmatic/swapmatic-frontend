// External libs
import Image from 'next/image'

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
interface IPoolItemPairProps {
  img1: string
  img2: string
}

const PoolItemPair: React.FC<IPoolItemPairProps> = ({
  img1: Img1,
  img2: Img2
}) => {
  return (
    <Styled.Container>
      <Image width={32} height={32} src={Img1} />
      <Image width={32} height={32} src={Img2} />
    </Styled.Container>
  )
}

export default PoolItemPair

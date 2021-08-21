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

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const PoolItemPair: React.FC<IPoolItemPairProps> = ({
  img1: Img1,
  img2: Img2
}) => {
  return (
    <Styled.Container>
      <Image
        width={32}
        height={32}
        alt={Img2}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(32, 32))}`}
        src={`https://raw.githubusercontent.com/BlockTimeWorld/crawler/main/icons/${Img2}_32.png`}
      />
      <Image
        width={32}
        height={32}
        alt={Img1}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(32, 32))}`}
        src={`https://raw.githubusercontent.com/BlockTimeWorld/crawler/main/icons/${Img1}_32.png`}
      />
    </Styled.Container>
  )
}

export default PoolItemPair

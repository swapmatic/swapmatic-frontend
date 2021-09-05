// External libs

// Assets
import ZeroxSvg from '../../../assets/imgs/zerox.webp'
import PolygonSvg from '../../../assets/imgs/polygon_logotype.webp'
import DexkitImg from '../../../assets/imgs/dexkit.webp'
import DigitalOceanImg from '../../../assets/imgs/digital_ocean.webp'

// Componentes
import Partner from '@/components/molecules/Partners/Partner'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const parnersList = [
  {
    name: '0x',
    link: 'https://0x.org/',
    image: ZeroxSvg
  },
  {
    name: 'Polygon',
    link: 'https://polygon.technology/',
    image: PolygonSvg
  },
  {
    name: 'Dexkit',
    link: 'https://dexkit.com/',
    image: DexkitImg
  },
  {
    name: 'DigitalOcean',
    link: 'https://www.digitalocean.com/',
    image: DigitalOceanImg
  }
]

const Partners: React.FC = () => {
  return (
    <Styled.Container>
      {parnersList.map(item => (
        <Partner key={item.link} partner={item} />
      ))}
    </Styled.Container>
  )
}

export default Partners

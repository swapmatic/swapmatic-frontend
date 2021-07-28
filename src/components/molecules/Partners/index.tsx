// External libs

// Assets
import CoinPaprikaImg from '../../../assets/imgs/coin_paprika_big.webp'

// Componentes
import Partner from '@/components/molecules/Partners/Partner'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const parnersList = [
  {
    name: 'CoinPaprika',
    link: '#',
    image: CoinPaprikaImg
  },
  {
    name: 'CoinPaprika',
    link: '#',
    image: CoinPaprikaImg
  },
  {
    name: 'CoinPaprika',
    link: '#',
    image: CoinPaprikaImg
  },
  {
    name: 'CoinPaprika',
    link: '#',
    image: CoinPaprikaImg
  },
  {
    name: 'CoinPaprika',
    link: '#',
    image: CoinPaprikaImg
  },
  {
    name: 'CoinPaprika',
    link: '#',
    image: CoinPaprikaImg
  },
  {
    name: 'CoinPaprika',
    link: '#',
    image: CoinPaprikaImg
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

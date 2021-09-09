// External libs

// Assets
import PolygonImg from '../../../assets/imgs/polygon_big.webp'
import EthImg from '../../../assets/imgs/eth_big.webp'
import BscImg from '../../../assets/imgs/bsc_big.webp'

// Componentes

// Subcomponentes and style
import * as Styled from './styles'
import BestPriceItem from '@/components/molecules/BestPriceItems/BestPriceItem'

// Services

// Types

const bestPriceItemsList = [
  {
    title: 'Polygon',
    image: PolygonImg,
    link: 'https://v2.swapmatic.io/#/matic/swap',
    description:
      'SushiSwap, QuickSwap, ComethSwap, Dfyn, mStable, Curve, DODO, WaultSwap, Polydex, ApeSwap, FirebirdOneSwap, Balancer, KyberDMM, ... and counting!'
  },
  {
    title: 'Mainnet',
    image: EthImg,
    link: 'https://v2.swapmatic.io/#/swap',
    description:
      '0x, Uniswap, Kyber, Curve, Balancer, Bancor, mStable, Mooniswap, Swerve, SnowSwap, SushiSwap, Shell, DODO, CREAM, CryptoCom, Linkswap, MakerPsm, Component, Saddle, xSigma'
  },
  {
    title: 'BSC',
    image: BscImg,
    link: 'https://v2.swapmatic.io/#/bsc/swap',
    description:
      'BakerySwap, Belt, DODO, Ellipsis, Mooniswap, ApeSwap, PancakeSwap, Nerve, SushiSwap, Smoothy, CafeSwap, CheeseSwap, JulSwap'
  }
]

const BestPriceItems: React.FC = () => {
  return (
    <Styled.Container>
      {bestPriceItemsList.map(item => (
        <BestPriceItem
          key={item.title}
          title={item.title}
          image={item.image}
          link={item.link}
          description={item.description}
        />
      ))}
    </Styled.Container>
  )
}

export default BestPriceItems

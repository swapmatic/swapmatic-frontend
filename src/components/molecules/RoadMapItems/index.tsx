// External libs

// Assets

// Componentes
import RoadMapItem from '@/components/molecules/RoadMapItems/RoadMapItem'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const roadMapItemsList = [
  {
    description:
      '8-2020 SwapMatic v1 is deployed on  Mumbai testnet and Matic Network',
    status: true
  },
  {
    description:
      "9-2020 SwapMatic is #7 in Matic Network's first Build-n-Earn Hackathon.",
    status: true
  },
  {
    description:
      "11-2020 Staking NFT Contract 'BOSS' is developed. SwapMatic & BOSS is #1 in Matic Network's & Metacartel's hackathon.",
    status: true
  },
  {
    description:
      '12-2020 SwapMatic introduces a liquidity farming approach that does not require depositing LP tokens.',
    status: true
  },
  {
    description:
      '1-2021 SWAM PoS token is deployed in Ethereum Mainnet and mapped to Matic.',
    status: true
  },
  {
    description:
      '2-2021 SWAM farming and staking starts in collaboration with blocktimeworld.com. Liquidity and adoption grows.',
    status: true
  },
  {
    description: '3-2021 Swapman appears the first time.',
    status: true
  },
  {
    description:
      '6-2021 SwapMatic aggregator launched in Polygon, BSC, and Mainnet. Universal token lists are introduced.',
    status: true
  }
]

const RoadMapItems: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Line />
      {roadMapItemsList.map(item => (
        <RoadMapItem
          key={item.description}
          description={item.description}
          status={item.status}
        />
      ))}
    </Styled.Container>
  )
}

export default RoadMapItems

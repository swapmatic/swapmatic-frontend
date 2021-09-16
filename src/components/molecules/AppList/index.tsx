// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'
import AppListItem from '@/components/molecules/AppList/AppListItem'

// Services

// Types

const appList = [
  {
    title: 'Swap Aggregator',
    description:
      'Finds always the best price using liquidity of multiple pools.',
    link: 'https://v2.swapmatic.io/#/matic/swap',
    newPage: true
  },
  {
    title: 'SWAM Staking',
    description:
      'Stake your SWAM tokens for 25% APR + your share of aggregation revenue.',
    link: '/staking',
    newPage: false
  },
  {
    title: 'SWAM Pooling',
    description:
      'Provide liquidity in SWAM pools and earn 100% or more APR, guaranteed.',
    link: '/pools',
    newPage: false
  },
  {
    title: 'Swapdog.io',
    description:
      'Original SwapMatic system and pools now guarded by Swapdog. SWAM farming available.',
    link: 'https://swapdog.io/swap',
    newPage: true
  },
  {
    title: 'Token List',
    description:
      'Use standard SwapMatic token list in Polygon AMMs such as QuickSwap, Dfyn, or SushiSwap to have all your favorite tokens included.',
    link: 'https://tokenlists.org/token-list?url=https://raw.githubusercontent.com/BlockTimeWorld/SwapMatic/master/swapmatic.tokenlist.json',
    newPage: true
  } /*,
  {
    title: 'SWAM Universe',
    description: 'Pool and earn rewards offered by our partnership projects.',
    link: '#'
  },
  {
    title: 'Swapman NFT',
    description: 'Get a Swapman NFT and other non-fungible tokens.',
    link: '#'
  } */
]

const AppList: React.FC = () => {
  return (
    <Styled.Container>
      {appList.map(item => (
        <AppListItem
          key={item.title}
          title={item.title}
          description={item.description}
          link={item.link}
          newPage={item.newPage}
        />
      ))}
    </Styled.Container>
  )
}

export default AppList

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
    link: '#'
  },
  {
    title: 'SWAM Staking',
    description:
      'Stake your SWAM tokens for 25% APR + your share of aggregation revenue.',
    link: '#'
  },
  {
    title: 'SWAM Pooling',
    description:
      'Provide liquidity in SWAM pools and earn 100% or more APR, guaranteed.',
    link: '#'
  },
  {
    title: 'SWAM Universe',
    description: 'Pool and earn rewards offered by our partnership projects.',
    link: '#'
  },
  {
    title: 'Swapman NFT',
    description: 'Get a Swapman NFT and other non-fungible tokens.',
    link: '#'
  }
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
        />
      ))}
    </Styled.Container>
  )
}

export default AppList

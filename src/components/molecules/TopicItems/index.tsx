// External libs

// Assets
import TopicImg from '../../../assets/imgs/0x.webp'

// Componentes
import TopicItem from '@/components/molecules/TopicItems/TopicItem'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
import { ITopicItem } from './TopicItem'

const topicsItemsList: ITopicItem[] = [
  {
    image: TopicImg,
    title1: 'The Secret Sauce:',
    title2: '0x Protocol',
    description:
      '0x protocol connects liquidity from multiple DeFi systems and protocols for the best user experience.',
    button: {
      title: '0X ON POLYGON',
      link: 'https://blog.0xproject.com/0x-api-is-now-live-on-polygon-ce61faa2f99b'
    }
  }
]

const TopicItems: React.FC = () => {
  return (
    <Styled.Container>
      {topicsItemsList.map(item => (
        <TopicItem key={item.title1} topic={item} />
      ))}
    </Styled.Container>
  )
}

export default TopicItems

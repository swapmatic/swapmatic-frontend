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
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    status: true
  },
  {
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    status: true
  },
  {
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    status: false
  },
  {
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    status: false
  },
  {
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    status: false
  },
  {
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    status: false
  },
  {
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    status: false
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

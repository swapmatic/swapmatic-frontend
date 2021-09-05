// External libs

// Assets
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface ITopicItem {
  image: string
  title1: string
  title2: string
  description: string
  button?: {
    title: string
    link: string
  }
}

interface ITopicItemProps {
  topic: ITopicItem
}

const TopicItem: React.FC<ITopicItemProps> = ({ topic }) => {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.Image src={topic.image} />
      </Styled.ImageContainer>
      <Styled.InfoContainer>
        <Typography marginTop="0.5rem" color="var(--color-black)" as="heading2">
          {topic.title1}
        </Typography>
        <Typography marginTop="0.5rem" color="var(--color-black)" as="heading1">
          {topic.title2}
        </Typography>
        <Typography marginTop="0.5rem" color="var(--color-black)" as="heading3">
          {topic.description}
        </Typography>
        {topic.button && (
          <form action={topic.button.link} target="_blank" method="get">
            <Button
              marginTop="1rem"
              sizeVariant="medium"
              colorVariant="primary"
            >
              {topic.button.title}
            </Button>
          </form>
        )}
      </Styled.InfoContainer>
    </Styled.Container>
  )
}

export default TopicItem

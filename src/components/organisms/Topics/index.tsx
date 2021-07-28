// External libs

// Assets

// Componentes
import TopicItems from '@/components/molecules/TopicItems'
import Wrapper from '@/components/atoms/Wrapper'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Topics: React.FC = () => {
  return (
    <Styled.Container>
      <Wrapper>
        <Styled.Content>
          <TopicItems />
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Topics

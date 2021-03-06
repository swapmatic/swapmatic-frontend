// External libs

// Assets

// Componentes
import TopicItems from '@/components/molecules/TopicItems'
import Wrapper from '@/components/atoms/Wrapper'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Topics: React.FC = () => {
  return (
    <Styled.Container id="token">
      <Wrapper>
        <Styled.Content>
          <Typography
            as="heading1"
            align="center"
            marginTop="8rem"
            marginBottom="4rem"
            data-aos="fade-left"
          ></Typography>
          <TopicItems />
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Topics

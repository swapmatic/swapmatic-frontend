// External libs

// Assets

// Componentes
import Wrapper from '@/components/atoms/Wrapper'
import VideoList from '@/components/molecules/VideoList'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'
import CircleAbsolute from '@/components/atoms/CircleAbsolute'

// Services

// Types

const Videos: React.FC = () => {
  return (
    <Styled.Container id="intro">
      <CircleAbsolute size="200px" top="20%" left="0%" />
      <Wrapper>
        <Styled.Content>
          <Typography
            as="heading1"
            align="center"
            marginTop="0rem"
            marginBottom="3rem"
            data-aos="fade-left"
          >
            Introduction
          </Typography>
          <VideoList />
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Videos

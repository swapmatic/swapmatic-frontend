// External libs

// Assets

// Componentes
import RoadMapItems from '@/components/molecules/RoadMapItems'
import Wrapper from '@/components/atoms/Wrapper'
import Typography from '@/components/atoms/Typography'
import CircleAbsolute from '@/components/atoms/CircleAbsolute'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const RoadMap: React.FC = () => {
  return (
    <Styled.Container id="roadmap">
      <CircleAbsolute size="150px" top="0%" right="75%" />
      <CircleAbsolute size="50px" top="20%" left="50%" />
      <CircleAbsolute size="1050px" top="50%" left="-10%" />
      <Wrapper>
        <Styled.Content>
          <Typography
            as="heading1"
            align="center"
            marginTop="8rem"
            marginBottom="4rem"
            data-aos="fade-left"
          >
            Roadmap
          </Typography>
          <RoadMapItems />
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default RoadMap

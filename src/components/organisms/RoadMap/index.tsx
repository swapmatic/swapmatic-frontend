// External libs

// Assets

// Componentes
import RoadMapItems from '@/components/molecules/RoadMapItems'
import Wrapper from '@/components/atoms/Wrapper'
import TransientShadow from '@/components/atoms/TransientShadow'
import Typography from '@/components/atoms/Typography'
import Mist from '@/components/atoms/Mist'
import CircleAbsolute from '@/components/atoms/CircleAbsolute'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const RoadMap: React.FC = () => {
  return (
    <Styled.Container id="roadmap">
      <Mist top="0" left="30%" />
      <CircleAbsolute size="150px" top="0%" right="75%" />
      <CircleAbsolute size="50px" top="20%" left="50%" />
      <CircleAbsolute size="300px" top="20%" right="0%" />
      <CircleAbsolute size="1050px" top="50%" left="-10%" />
      <TransientShadow position="top" height="10rem" />
      <Wrapper>
        <Styled.Content>
          <Typography
            as="heading1"
            align="center"
            marginTop="8rem"
            marginBottom="4rem"
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

// External libs

// Assets

// Componentes
import Wrapper from '@/components/atoms/Wrapper'
import AppList from '@/components/molecules/AppList'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'
import CircleAbsolute from '@/components/atoms/CircleAbsolute'

// Services

// Types

const Apps: React.FC = () => {
  return (
    <Styled.Container id="apps">
      <CircleAbsolute size="800px" top="20%" right="-10%" />
      <CircleAbsolute size="400px" top="20%" left="12%" />
      <Wrapper>
        <Styled.Content>
          <Typography
            as="heading1"
            align="center"
            marginTop="8rem"
            marginBottom="1rem"
            data-aos="fade-left"
          >
            Become part of this new universe
          </Typography>
          <Typography
            as="heading2"
            marginBottom="1rem"
            align="center"
            data-aos="fade-left"
          >
            Select an APP
          </Typography>
          <AppList />
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Apps

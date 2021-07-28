// External libs

// Assets

// Componentes
import Wrapper from '@/components/atoms/Wrapper'
import TransientShadow from '@/components/atoms/TransientShadow'
import BkgVideo from '@/components/atoms/BkgVideo'
import AppList from '@/components/molecules/AppList'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Apps: React.FC = () => {
  return (
    <Styled.Container id="apps">
      <TransientShadow position="top" height="10rem" />
      <BkgVideo video="/universe.mp4" />
      <Wrapper>
        <Styled.Content>
          <Typography
            as="heading1"
            align="center"
            marginTop="8rem"
            marginBottom="1rem"
          >
            Become part of this new universe
          </Typography>
          <Typography as="heading2" marginBottom="1rem" align="center">
            Select an APP
          </Typography>
          <AppList />
        </Styled.Content>
      </Wrapper>
      <TransientShadow position="bottom" bottom="0" height="10rem" />
    </Styled.Container>
  )
}

export default Apps

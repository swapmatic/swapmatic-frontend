// External libs

// Assets

// Componentes
import TeamMembers from '@/components/molecules/TeamMembers'
import Wrapper from '@/components/atoms/Wrapper'
import Typography from '@/components/atoms/Typography'
import Mist from '@/components/atoms/Mist'
import CircleAbsolute from '@/components/atoms/CircleAbsolute'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Team: React.FC = () => {
  return (
    <Styled.Container id="team">
      <Mist top="0" left="30%" />
      <CircleAbsolute size="538px" top="80%" left="40%" />
      <Wrapper>
        <Styled.Content>
          <Typography
            as="heading1"
            align="center"
            marginTop="8rem"
            marginBottom="4rem"
          >
            Team
          </Typography>
          <TeamMembers />
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Team

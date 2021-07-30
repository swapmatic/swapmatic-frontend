// External libs

// Assets

// Componentes
import TeamMembers from '@/components/molecules/TeamMembers'
import Wrapper from '@/components/atoms/Wrapper'
import Typography from '@/components/atoms/Typography'
import CircleAbsolute from '@/components/atoms/CircleAbsolute'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Team: React.FC = () => {
  return (
    <Styled.Container id="team">
      <CircleAbsolute size="538px" top="80%" left="40%" />
      <Wrapper>
        <Styled.Content>
          <Typography
            as="heading1"
            align="center"
            marginTop="8rem"
            marginBottom="4rem"
            data-aos="fade-left"
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

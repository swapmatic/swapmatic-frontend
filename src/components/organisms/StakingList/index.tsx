// External libs

// Assets

// Componentes
import StakingItems from '@/components/molecules/StakingItems'
import Wrapper from '@/components/atoms/Wrapper'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'
import Alert from './Alert'

// Services

// Types

const Staking: React.FC = () => {
  return (
    <Styled.Container>
      <Alert />
      <Wrapper>
        <Styled.Content>
          <Typography
            marginTop="2rem"
            marginBottom="1rem"
            as="heading1"
            align="center"
            data-aos="fade-left"
          >
            Staking
          </Typography>
          <Typography
            marginBottom="1rem"
            as="heading3"
            align="center"
            data-aos="fade-left"
          >
            Stake today and start earning.
          </Typography>
          <StakingItems />
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Staking

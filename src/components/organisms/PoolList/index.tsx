// External libs

// Assets

// Componentes
import PoolItems from '@/components/molecules/PoolItems'
import Wrapper from '@/components/atoms/Wrapper'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'
import Alert from './Alert'

// Services

// Types

const PoolList: React.FC = () => {
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
            SWAM Pools
          </Typography>
          <Typography
            marginBottom="1rem"
            as="heading3"
            align="center"
            data-aos="fade-left"
          >
            Liquidity in SWAM pools earn 100% APR or more. Rewards are paid
            directly to your account daily. No need to deposit LP tokens.
          </Typography>
          <PoolItems />
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default PoolList

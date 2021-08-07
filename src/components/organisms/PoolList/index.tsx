// External libs

// Assets

// Componentes
import PoolItems from '@/components/molecules/PoolItems'
import Wrapper from '@/components/atoms/Wrapper'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const PoolList: React.FC = () => {
  return (
    <Styled.Container>
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
            Tokens pooled in SwapMatic or SWAM pools earn 100% or more APR
            returns. That is a great opportunity to build adoption for your
            project.
          </Typography>
          <PoolItems />
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default PoolList

// External libs

// Assets

// Componentes
import Wrapper from '@/components/atoms/Wrapper'
import BestPriceItems from '@/components/molecules/BestPriceItems'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'
import CircleAbsolute from '@/components/atoms/CircleAbsolute'

// Services

// Types

const BestPrice: React.FC = () => {
  return (
    <Styled.Container id="bestprice">
      <CircleAbsolute size="200px" top="20%" right="5%" />
      <CircleAbsolute size="80px" top="0%" left="40%" />
      <CircleAbsolute size="500px" top="40%" left="-2%" />
      <CircleAbsolute size="20px" top="80%" right="50%" />
      <Wrapper>
        <Styled.Content>
          <Typography
            as="heading1"
            align="center"
            marginTop="8rem"
            marginBottom="4rem"
            data-aos="fade-left"
          >
            SwapMatic always finds the best price using multiple liquidity
            sources
          </Typography>
          <BestPriceItems />
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default BestPrice

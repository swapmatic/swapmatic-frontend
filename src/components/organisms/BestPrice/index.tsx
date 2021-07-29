// External libs

// Assets

// Componentes
import Wrapper from '@/components/atoms/Wrapper'
import BkgVideo from '@/components/atoms/BkgVideo'
import TransientShadow from '@/components/atoms/TransientShadow'
import BestPriceItems from '@/components/molecules/BestPriceItems'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const BestPrice: React.FC = () => {
  return (
    <Styled.Container id="bestprice">
      <TransientShadow position="top" height="10rem" />
      <BkgVideo video="/networkloop.mp4" />
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
      <TransientShadow position="bottom" bottom="0" height="10rem" />
    </Styled.Container>
  )
}

export default BestPrice

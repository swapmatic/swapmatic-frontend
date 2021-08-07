// External libs

// Assets
import SwamImg from '../../../../assets/imgs/swam_32.png'
import Usdcimg from '../../../../assets/imgs/usdc_32.png'

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import PoolItemPair from '../PoolItem/PoolItemPair'
import * as Styled from './styles'
import SplitInfo from './SplitInfo'
import Button from '@/components/atoms/Button'

// Services

// Types
interface IPoolItemDetailsModalProps {
  id: number
  setIsModal: (data: false) => void
}

const PoolItemDetailsModal: React.FC<IPoolItemDetailsModalProps> = ({
  id,
  setIsModal
}) => {
  const info1 = {
    title: 'Link',
    value: 'https://quickswap.exchange/',
    link: true
  }
  const info2 = {
    title: 'Total Liquidity',
    value: '1.000.000$'
  }
  const info3 = {
    title: 'Your Liquidity',
    value: '10.000$'
  }
  const info4 = {
    title: 'Rewards (24h)',
    value: '1562.51 SWAM'
  }
  const info5 = {
    title: 'Your Rewards (24h)',
    value: '12.02 SWAM'
  }
  const info6 = {
    title: 'Liquidity',
    value: '1.000.000$'
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.HeaderContainer>
          <Typography as="heading1" color="var(--color-black)">
            QuickSwap
          </Typography>
          <Styled.TokensPairContainer>
            <PoolItemPair img1={SwamImg} img2={Usdcimg} />
            <Typography as="body1" marginLeft="1rem" color="var(--color-black)">
              SWAM-MATIC
            </Typography>
          </Styled.TokensPairContainer>
        </Styled.HeaderContainer>
        <SplitInfo info={info1} />
        <SplitInfo info={info2} />
        <SplitInfo info={info3} />
        <SplitInfo info={info4} />
        <SplitInfo info={info5} />
        <SplitInfo info={info6} />
        <Styled.ButtonContainer>
          <Button
            colorVariant="primary"
            marginTop="1rem"
            marginBottom="1rem"
            sizeVariant="max"
          >
            Manage
          </Button>
          <Button
            colorVariant="primaryReverse"
            sizeVariant="max"
            onClick={() => setIsModal(false)}
          >
            Close
          </Button>
        </Styled.ButtonContainer>
      </Styled.Content>
    </Styled.Container>
  )
}

export default PoolItemDetailsModal

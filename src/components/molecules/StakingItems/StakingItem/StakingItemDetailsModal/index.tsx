// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import StakingItemPair from '../StakingItemPair'
import * as Styled from './styles'
import SplitInfo from './SplitInfo'
import Button from '@/components/atoms/Button'

// Services

// Types
import { IStaking } from '@/components/molecules/StakingItems/StakingItem'
interface IStakingItemDetailsModalProps {
  stakingSelected: IStaking | null
  setIsModal: (data: false) => void
}

const StakingItemDetailsModal: React.FC<IStakingItemDetailsModalProps> = ({
  stakingSelected,
  setIsModal
}) => {
  if (!stakingSelected) {
    return <div />
  }

  const poolItemsDetails = [
    {
      title: 'Info',
      value: 'https://blocktimeworld.com/staking-in-blocktimeworld/',
      link: true
    },
    {
      title: 'Total Staked',
      value: stakingSelected.poolBalance.toFixed(2) + ' SWAM'
    },
    {
      title: 'Your Stake',
      value: String(
        stakingSelected.holderBalance
          ? stakingSelected.holderBalance.toFixed(2) + ' SWAM'
          : 0 + ' SWAM'
      )
    },
    {
      title: 'Your Share',
      value: String(
        stakingSelected.holderShare
          ? `${(stakingSelected.holderShare * 100).toFixed(2)}%`
          : '0%'
      )
    }
  ]

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.HeaderContainer>
          <Typography as="heading1" color="var(--color-black)">
            {stakingSelected.poolName}
          </Typography>
          <Styled.TokensPairContainer>
            <StakingItemPair img1="swam" img2="StakingBoss" />
            <Typography as="body1" marginLeft="1rem" color="var(--color-black)">
              SWAM Staking
            </Typography>
          </Styled.TokensPairContainer>
        </Styled.HeaderContainer>
        {poolItemsDetails.map(item => (
          <SplitInfo key={item.title} info={item} />
        ))}
        <Styled.ButtonContainer>
          <form
            action={'https://blocktimeworld.com/swam-pos-staking/'}
            target="_blank"
            method="get"
          >
            <Button
              colorVariant="primary"
              marginTop="1rem"
              marginBottom="1rem"
              sizeVariant="max"
            >
              Manage Liquidity
            </Button>
          </form>
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

export default StakingItemDetailsModal

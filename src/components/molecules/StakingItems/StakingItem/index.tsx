// External libs
import { memo, useState } from 'react'

// Assets

// Componentes
import Typography from '@/components/atoms/Typography'
import StakingItemDetailsModal from './StakingItemDetailsModal'

// Subcomponentes and style
import * as Styled from './styles'
import PoolItemPair from './StakingItemPair'
import PoolItemInfo from './StakingItemInfo'
import Button from '@/components/atoms/Button'

// Services

// Types
export interface IStaking {
  id: number
  projectName: string
  poolType: string
  poolName: string | undefined
  poolBalance: number
  holderAddress: string
  holderBalance: number
  holderPending: number
  holderShare: number
  active: number
  timeStamped: string
}

interface IStakingItemProps {
  stakingItem: IStaking
}

const PoolItem: React.FC<IStakingItemProps> = ({ stakingItem }) => {
  const [modal, setIsModal] = useState(false)

  console.log(stakingItem)

  return (
    <Styled.Container>
      {modal && (
        <StakingItemDetailsModal
          setIsModal={setIsModal}
          stakingSelected={stakingItem}
        />
      )}
      <Styled.IconsContainer>
        <PoolItemPair img1="swam" img2="StakingBoss" />
      </Styled.IconsContainer>
      <Styled.PairTokensContainer>
        <Typography as="heading3">SWAM Staking</Typography>
      </Styled.PairTokensContainer>
      <PoolItemInfo
        title="DeFi"
        info={`${stakingItem.poolName} ${stakingItem.poolType}`}
      />
      <PoolItemInfo
        title="Total Staked"
        info={
          stakingItem.poolBalance
            ? String(stakingItem.poolBalance.toFixed(2)) + ' SWAM'
            : '0 SWAM'
        }
      />
      <PoolItemInfo title="APR" info={`${String(0.25 * 100)}%`} />
      <PoolItemInfo
        title="Pending"
        info={
          stakingItem.holderPending
            ? String(stakingItem.holderPending.toFixed(2)) + ' SWAM'
            : '0 SWAM'
        }
      />
      <Button
        colorVariant="primary"
        onClick={() => setIsModal(true)}
        sizeVariant="medium"
      >
        Details
      </Button>
    </Styled.Container>
  )
}

export default memo(PoolItem)

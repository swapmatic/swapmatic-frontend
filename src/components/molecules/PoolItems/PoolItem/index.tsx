// External libs
import { memo, useState } from 'react'

// Assets

// Componentes
import Typography from '@/components/atoms/Typography'
import PoolItemDetailsModal from '@/components/molecules/PoolItems/PoolItem/PoolItemDetailsModal'

// Subcomponentes and style
import * as Styled from './styles'
import PoolItemPair from './PoolItemPair'
import PoolItemInfo from './PoolItemInfo'
import Button from '@/components/atoms/Button'

// Services

// Types
export interface IPool {
  id: number
  system: string
  poolName: string
  swapLink: string
  swapTrade: string
  apr: number
  active: number
  secondaryAssetName: string
  poolTokenBalance: number
  swamPrice: number
  poolBalanceUpdate: string
  holderAddress: null | string
  holderBalance: null | number
  holderBalanceUsd: null | number
  pendingRewardsSwam: null | number
  pendingRewardsUsd: null | number
  holderShare: null | number
  timestamped: null | string
}

interface IPoolItemProps {
  poolItem: IPool
}

const PoolItem: React.FC<IPoolItemProps> = ({ poolItem }) => {
  const [modal, setIsModal] = useState(false)

  return (
    <Styled.Container>
      {modal && (
        <PoolItemDetailsModal setIsModal={setIsModal} poolSelected={poolItem} />
      )}
      <Styled.IconsContainer>
        <PoolItemPair img1="swam" img2={poolItem.secondaryAssetName} />
      </Styled.IconsContainer>
      <Styled.PairTokensContainer>
        <Typography as="heading3">{poolItem.poolName}</Typography>
      </Styled.PairTokensContainer>
      <PoolItemInfo title="DeFi" info={poolItem.system} />
      <PoolItemInfo
        title="Pool Balance"
        info={
          poolItem.poolTokenBalance
            ? String(poolItem.poolTokenBalance.toFixed(2)) + ' SWAM'
            : '0 SWAM'
        }
      />
      <PoolItemInfo title="APR" info={`${String(poolItem.apr * 100)}%`} />
      <PoolItemInfo
        title="Pending"
        color={
          poolItem.pendingRewardsSwam && poolItem.pendingRewardsSwam > 0
            ? 'green'
            : 'white'
        }
        info={`${String(
          poolItem.pendingRewardsSwam === null
            ? 0
            : poolItem.pendingRewardsSwam.toFixed(2)
        )} SWAM`}
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

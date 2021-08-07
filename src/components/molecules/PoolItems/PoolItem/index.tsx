// External libs

// Assets

// Componentes
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'
import PoolItemPair from './PoolItemPair'
import PoolItemInfo from './PoolItemInfo'
import Button from '@/components/atoms/Button'

// Services

// Types
export interface IPoolItem {
  tokenPairImg1: string
  tokenPairImg2: string
  pairInfo: string
  system: string
  swamBalance: string
  apr: string
  earned: string
  staked: boolean
}

interface IPoolItemProps {
  poolItem: IPoolItem
  setIsModal: (data: true) => void
}

const PoolItem: React.FC<IPoolItemProps> = ({ poolItem, setIsModal }) => {
  return (
    <Styled.Container>
      <Styled.IconsContainer>
        <PoolItemPair
          img1={poolItem.tokenPairImg1}
          img2={poolItem.tokenPairImg2}
        />
      </Styled.IconsContainer>
      <Styled.PairTokensContainer>
        <Typography as="heading3">{poolItem.pairInfo}</Typography>
      </Styled.PairTokensContainer>
      <PoolItemInfo title="System" info={poolItem.system} />
      <PoolItemInfo title="Pool SWAM Balance" info={poolItem.swamBalance} />
      <PoolItemInfo title="APR" info={poolItem.apr} />
      <PoolItemInfo title="Earned" info={poolItem.earned} />
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

export default PoolItem

// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import PoolItemPair from '../PoolItemPair'
import * as Styled from './styles'
import SplitInfo from './SplitInfo'
import Button from '@/components/atoms/Button'

// Services

// Types
import { IPool } from '@/components/molecules/PoolItems/PoolItem'
interface IPoolItemDetailsModalProps {
  poolSelected: IPool | null
  setIsModal: (data: false) => void
}

const PoolItemDetailsModal: React.FC<IPoolItemDetailsModalProps> = ({
  poolSelected,
  setIsModal
}) => {
  if (!poolSelected) {
    return <div />
  }

  const poolItemsDetails = [
    { title: 'Trade', value: poolSelected.swapTrade, link: true },
    {
      title: 'Total Liquidity',
      value:
        '$' +
        String(
          (poolSelected.poolTokenBalance * poolSelected.swamPrice * 2).toFixed(
            2
          ) + ' USD'
        )
    },
    {
      title: 'Your Liquidity',
      value: String(
        poolSelected.holderBalance
          ? '$' +
              (poolSelected.holderBalance * poolSelected.swamPrice * 2).toFixed(
                2
              ) +
              ' USD'
          : '$' + 0 + ' USD'
      )
    },
    {
      title: 'Your Share',
      value: String(
        poolSelected.holderShare
          ? `${poolSelected.holderShare.toFixed(2)}%`
          : '0%'
      )
    }
  ]

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.HeaderContainer>
          <Typography as="heading1" color="var(--color-black)">
            {poolSelected.system}
          </Typography>
          <Styled.TokensPairContainer>
            <PoolItemPair img1="swam" img2={poolSelected.secondaryAssetName} />
            <Typography as="body1" marginLeft="1rem" color="var(--color-black)">
              {poolSelected.poolName}
            </Typography>
          </Styled.TokensPairContainer>
        </Styled.HeaderContainer>
        {poolItemsDetails.map(item => (
          <SplitInfo key={item.title} info={item} />
        ))}
        <Styled.ButtonContainer>
          <form action={poolSelected.swapLink} target="_blank" method="get">
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

export default PoolItemDetailsModal

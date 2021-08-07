// External libs
import { useEffect, useState } from 'react'

// Assets
import SwamImg from '../../../assets/imgs/swam_32.png'
import Usdcimg from '../../../assets/imgs/usdc_32.png'

// Componentes
import Input from '@/components/atoms/Input'

// Subcomponentes and style
import * as Styled from './styles'
import PoolItem, { IPoolItem } from './PoolItem'
import ToggleSwitch from '@/components/atoms/ToggleSwitch'
import PoolItemDetailsModal from './PoolItemDetailsModal'

// Services

// Types

const poolList: IPoolItem[] = [
  {
    tokenPairImg1: SwamImg,
    tokenPairImg2: Usdcimg,
    pairInfo: 'SWAM-USDC',
    system: 'QuickSwap',
    swamBalance: '526.80',
    apr: '200.00%',
    earned: '3.122 SWAM',
    staked: true
  },
  {
    tokenPairImg1: SwamImg,
    tokenPairImg2: Usdcimg,
    pairInfo: 'SWAM-MATIC',
    system: 'QuickSwap',
    swamBalance: '526.80',
    apr: '200.00%',
    earned: '0 SWAM',
    staked: false
  }
]

const PoolItems: React.FC = () => {
  const [isStaked, setIsStaked] = useState(false)
  const [modal, setIsModal] = useState(false)

  useEffect(() => {
    console.log(isStaked)
  }, [isStaked])

  return (
    <Styled.Container>
      {modal && <PoolItemDetailsModal setIsModal={setIsModal} id={1} />}
      <Styled.HeaderFilters>
        <ToggleSwitch
          setIsStaked={setIsStaked}
          isStaked={isStaked}
          marginRight="1rem"
        />
        <Input label="Search" />
      </Styled.HeaderFilters>
      <Styled.Content>
        {poolList.map(
          item =>
            (isStaked && item.staked && (
              <PoolItem
                key={item.pairInfo}
                setIsModal={setIsModal}
                poolItem={item}
              />
            )) ||
            (!isStaked && (
              <PoolItem
                setIsModal={setIsModal}
                key={item.pairInfo}
                poolItem={item}
              />
            ))
        )}
      </Styled.Content>
    </Styled.Container>
  )
}

export default PoolItems

/* eslint-disable prettier/prettier */
// External libs
import { useEffect, useState, memo } from 'react'
import { useWeb3React } from '@web3-react/core'
import axios from 'axios'

// Assets

// Componentes
// import Input from '@/components/atoms/Input'

// Subcomponentes and style
import * as Styled from './styles'
import PoolItem, { IPool } from './PoolItem'
import ToggleSwitch from '@/components/atoms/ToggleSwitch'
import PoolItemSkeleton from './PoolItemSkeleton'

// Services

// Types

const PoolItems: React.FC = () => {
  const { account } = useWeb3React()
  const [isStaked, setIsStaked] = useState(false)
  const [pools, setPools] = useState<IPool[] | null>(null)

  const getPools = async (wallet: string | null | undefined) => {
    const response = await axios.get(`/api/pools/${wallet}`)
    console.warn(wallet)
    setPools(response.data)
  }

  useEffect(() => {
    getPools(account)
  }, [account])

  return (
    <Styled.Container>
      <Styled.HeaderFilters>
        <ToggleSwitch
          setIsStaked={setIsStaked}
          isStaked={isStaked}
          marginRight="1rem"
        />
        {/* <Input label="Search" /> */}
      </Styled.HeaderFilters>
      <Styled.Content>
        {!pools && <><PoolItemSkeleton /><PoolItemSkeleton /><PoolItemSkeleton /><PoolItemSkeleton /></>}
        {pools && pools.map(
          item =>
            (isStaked &&
              ((item.pendingRewardsSwam !== null &&
                item.pendingRewardsSwam > 0) ||
                (item.pendingRewardsUsd !== null &&
                  item.pendingRewardsUsd > 0)) && (
                <PoolItem
                  key={item.id}
                  poolItem={item}
                />
            )) ||
            (!isStaked && (
              <PoolItem
                key={item.id}
                poolItem={item}
              />
            ))
        )}
      </Styled.Content>
    </Styled.Container>
  )
}

export default memo(PoolItems)

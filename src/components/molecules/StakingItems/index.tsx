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
import StakingItem, { IStaking } from './StakingItem'
import StakingItemSkeleton from './StakingItemSkeleton'

// Services

// Types

const StakingItems: React.FC = () => {
  const { account } = useWeb3React()
  const [stakings, setStakings] = useState<IStaking[] | null>(null)

  const getStaking = async (wallet: string | null | undefined) => {
    const response = await axios.get(`/api/stakings/${wallet}`)
    console.log(response)
    setStakings(response.data)
  }

  useEffect(() => {
    getStaking(account)
    setInterval(function() { getStaking(account) }, 300000)
  }, [account])

  return (
    <Styled.Container>
      <Styled.HeaderFilters>
        {/* <Input label="Search" /> */}
      </Styled.HeaderFilters>
      <Styled.Content>
        {!stakings && <><StakingItemSkeleton /><StakingItemSkeleton /><StakingItemSkeleton /><StakingItemSkeleton /></>}
        {stakings && stakings.map(
          item => (
              <StakingItem
                key={item.id}
                stakingItem={item}
              />
          )
        )}
      </Styled.Content>
    </Styled.Container>
  )
}

export default memo(StakingItems)

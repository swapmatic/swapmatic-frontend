// External libs
import axios from 'axios'

// Assets

// Componentes
import Button from '@/components/atoms/Button'

// Subcomponentes and style
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import * as Styled from './styles'
import Typography from '@/components/atoms/Typography'

// Services

// Types

const PendingTotal: React.FC = () => {
  const { account } = useWeb3React()
  const [swamPrice, setSwamPrice] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  async function getSwamValue() {
    const response = await axios.get('/api/swam/price')
    console.log(response.data[0].usdPrice)
    setSwamPrice(response.data[0].usdPrice.toFixed(2))
  }

  async function getTotal(acc: typeof account) {
    const totalPending = await axios.get(`/api/wallet/pending/${acc}`)
    setTotal(totalPending.data[0].totalPending)
  }

  useEffect(() => {
    getSwamValue()
    getTotal(account)
  }, [account])

  return (
    <Styled.Container>
      <form
        action="https://blocktimeworld.com/claim-swam/"
        target="_blank"
        method="get"
      >
        <Typography
          marginRight="0.5rem"
          as="body1"
          color="var(--color-primary)"
        >
          ${swamPrice}
        </Typography>
        <Button marginLeft="auto" sizeVariant="small" colorVariant="primary">
          {`${total ? total.toFixed(4) : 0}`} | Claim
        </Button>
      </form>
    </Styled.Container>
  )
}

export default PendingTotal

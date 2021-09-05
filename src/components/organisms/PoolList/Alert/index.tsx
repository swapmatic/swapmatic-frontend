// External libs
import { useState } from 'react'

// Assets
import ArrowSvg from '../../../../assets/svgs/arrow.svg'

// Componentes
import Wrapper from '@/components/atoms/Wrapper'
import Typography from '@/components/atoms/Typography'
import Anchor from '@/components/atoms/Anchor'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Alert: React.FC = () => {
  const [colapse, setColapse] = useState(false)

  return (
    <Styled.Container>
      <Styled.Header
        colapse={colapse}
        onClick={() => {
          setColapse(!colapse)
        }}
      >
        <Typography
          marginTop="0.5rem"
          marginBottom="0.5rem"
          as="body3"
          align="center"
        >
          Info <ArrowSvg />
        </Typography>
      </Styled.Header>
      <Wrapper>
        <Styled.Content colapse={colapse}>
          <Typography marginBottom="0.5rem" as="body4" align="center">
            All values on this page are for reference and not real-time.
          </Typography>
          <Typography marginBottom="0.5rem" as="body4" align="center">
            Pool balances update every 15 minutes. Pool holder balances update
            four times a day.
          </Typography>
          <Typography marginBottom="0.5rem" as="body4" align="center">
            SWAM price updates every five minutes and is based on SWAM-WMATIC
            and SWAM-USDT pools on QuickSwap and Dfyn.
          </Typography>
          <Typography marginBottom="0.5rem" as="body4" align="center">
            Your daily liquidity mining reward is based on your balances in
            pools at the moment of the daily payment. One can expect full reward
            on the day two after the deposit, latest.
          </Typography>
          <Typography marginBottom="0.5rem" as="body4" align="center">
            The pending reward as seen on the page is the amount you will
            receive in the next daily payment IF you keep your balances in the
            pools.
          </Typography>
          <Typography marginBottom="0.5rem" as="body4" align="center">
            Your rewards are redeemable in{' '}
            <Anchor target="_blank" href="https://blocktimeworld.com/claim/">
              blocktimeworld.com
            </Anchor>
          </Typography>
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Alert

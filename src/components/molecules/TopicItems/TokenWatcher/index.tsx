// External libs
import { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

// Assets
import MetamaskSvg from '../../../../assets/svgs/metamask.svg'
import PolygonSvg from '../../../../assets/svgs/polygon.svg'
import ChartSvg from '../../../../assets/svgs/chart.svg'
import NftSvg from '../../../../assets/svgs/nft.svg'

// Componentes
import Typography from '@/components/atoms/Typography'
import Button from '@/components/atoms/Button'

// Subcomponentes and style
import * as Styled from './styles'

// Services
import { injected } from '@/services/web3/wallet'

// Types

const TokenWatcher: React.FC = () => {
  const [swamPrice, setSwamPrice] = useState<number>(0)
  const [swamSupply, setSwamSupply] = useState<number>(0)

  async function getSwamValue() {
    const response = await axios.get('/api/swam/price')
    console.log(response.data[0].usdPrice)
    setSwamPrice(response.data[0].usdPrice.toFixed(2))
  }

  async function getSwamSupply() {
    try {
      const response = await axios.get('/api/swam/supply')
      setSwamSupply(response.data[0].swamSupply)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getSwamValue()
    getSwamSupply()
  }, [])

  async function addOnWallet() {
    const provider = await injected.getProvider()
    provider.sendAsync(
      {
        method: 'metamask_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: '0x94C18174840F80D49d59DC3a1742aF0B884A8184',
            symbol: 'SWAM',
            decimals: 18,
            image:
              'https://raw.githubusercontent.com/BlockTimeWorld/crawler/main/icons/swam_60.png'
          }
        },
        id: Math.round(Math.random() * 100000)
      },
      (err: any, added: any) => {
        console.log('provider returned', err, added)
        if (err || 'error' in added) {
          console.log(err)
          return
        }
        console.log('sucesso')
      }
    )
    console.log(provider)
  }

  return (
    <Styled.Container id="token">
      <Styled.Content>
        <Styled.ImgContent>
          <Image
            src="https://raw.githubusercontent.com/BlockTimeWorld/crawler/main/icons/swam_60.png"
            width={80}
            height={80}
            alt="SwapMatic logo"
          />
        </Styled.ImgContent>
        <Typography align="center" color="var(--color-black)" as="heading2">
          SwapMatic Token (PoS) (SWAM)
        </Typography>
        <Typography color="var(--color-black)" marginTop="0.5rem" as="heading3">
          0x94C18174840F80D49d59DC3a1742aF0B884A8184
        </Typography>
        <Typography
          color="var(--color-black)"
          marginTop="0.5rem"
          marginBottom="1rem"
          as="body2"
        >
          Polygon Network
        </Typography>
        <Styled.BtnsContent>
          <Styled.BtnContent>
            <Button
              sizeVariant="max"
              onClick={addOnWallet}
              colorVariant="metamask"
            >
              <MetamaskSvg /> Add to Metamask
            </Button>
          </Styled.BtnContent>
          <Styled.BtnContent>
            <form
              action="https://polygonscan.com/address/0x94C18174840F80D49d59DC3a1742aF0B884A8184"
              target="_blank"
              method="get"
            >
              <Button sizeVariant="max" colorVariant="polygon">
                <PolygonSvg /> PolygonScan
              </Button>
            </form>
          </Styled.BtnContent>
          <Styled.BtnContent>
            <form
              action="https://polygon.poocoin.app/tokens/0x94c18174840f80d49d59dc3a1742af0b884a8184"
              target="_blank"
              method="get"
            >
              <Button sizeVariant="max" colorVariant="chart">
                <ChartSvg /> SWAM Chart
              </Button>
            </form>
          </Styled.BtnContent>
          <Styled.BtnContent>
            <form
              action="https://opensea.io/collection/swapman-nft"
              target="_blank"
              method="get"
            >
              <Button sizeVariant="max" colorVariant="swapman">
                <NftSvg /> SwapMan NFT
              </Button>
            </form>
          </Styled.BtnContent>
        </Styled.BtnsContent>
        <Styled.InfoContent>
          <Typography
            color="var(--color-black)"
            marginTop="0.5rem"
            as="body2"
            align="center"
          >
            Circulating supply: <strong>{swamSupply}</strong>
          </Typography>
          <Typography
            color="var(--color-black)"
            marginTop="0.5rem"
            as="body2"
            align="center"
          >
            Price: <strong>${swamPrice}</strong>
          </Typography>
          <Typography
            color="var(--color-black)"
            marginTop="0.5rem"
            as="body2"
            align="center"
          >
            Maximum supply: <strong>100000000</strong>
          </Typography>
          <Typography
            color="var(--color-black)"
            marginTop="0.5rem"
            as="body2"
            align="center"
          >
            Marketcap: <strong>${(swamSupply * swamPrice).toFixed(2)}</strong>
          </Typography>
        </Styled.InfoContent>
      </Styled.Content>
    </Styled.Container>
  )
}

export default TokenWatcher

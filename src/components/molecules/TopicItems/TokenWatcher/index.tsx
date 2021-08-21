// External libs
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import Image from 'next/image'

// Assets
import MetamaskSvg from '../../../../assets/svgs/metamask.svg'
import PolygonSvg from '../../../../assets/svgs/polygon.svg'
import ChartSvg from '../../../../assets/svgs/chart.svg'
import NftSvg from '../../../../assets/svgs/nft.svg'

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const TokenWatcher: React.FC = () => {
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
        <Typography color="var(--color-black)" as="heading2">
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
            <Button sizeVariant="max" colorVariant="metamask">
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
            marginRight="0.5rem"
            marginTop="0.5rem"
            as="body2"
            align="right"
          >
            Circulating supply: <strong>10107.70</strong>
          </Typography>
          <Typography
            color="var(--color-black)"
            marginLeft="0.5rem"
            marginTop="0.5rem"
            as="body2"
            align="left"
          >
            Price: <strong>$4.42</strong>
          </Typography>
          <Typography
            color="var(--color-black)"
            marginRight="0.5rem"
            marginTop="0.5rem"
            as="body2"
            align="right"
          >
            Maximum supply: <strong>100000000</strong>
          </Typography>
          <Typography
            color="var(--color-black)"
            marginLeft="0.5rem"
            marginTop="0.5rem"
            as="body2"
            align="left"
          >
            Marketcap: <strong>$44692.94</strong>
          </Typography>
        </Styled.InfoContent>
      </Styled.Content>
    </Styled.Container>
  )
}

export default TokenWatcher

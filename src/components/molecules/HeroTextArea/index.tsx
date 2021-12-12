// External libs
import Image from 'next/image'

// Assets
import PolygonImg from '../../../assets/imgs/polygon_big.webp'

// Componentes

// Subcomponentes and style
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import * as Styled from './styles'
import Row from '@/components/atoms/Row'
import Column from '@/components/atoms/Column'

// Services

// Types

const HeroTextArea: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.HeadingArea>
        <Typography marginBottom="0.5rem" as="heading1">
          SWAPMATIC
        </Typography>
        <Typography marginBottom="1rem" as="heading2">
          The Ultimate SWAP Aggregator
        </Typography>
        <Column>
          <form
            action="https://v2.swapmatic.io/#/matic/swap"
            target="_blank"
            method="get"
          >
            <Button
              marginBottom="0.5rem"
              colorVariant="primary"
              sizeVariant="medium"
            >
              Launch APP
            </Button>
          </form>
          <form
            action="https://t.me/joinchat/bOKzcrdDBgdhOTRh"
            target="_blank"
            method="get"
          >
            <Button colorVariant="white" sizeVariant="medium">
              Community
            </Button>
          </form>
        </Column>
      </Styled.HeadingArea>
      <Styled.PoweredArea>
        <Row alignItems="center">
          <Typography marginRight="0.5rem" as="heading3">
            Powered by
          </Typography>
          <Image alt="Polygon" height={47} width={53} src={PolygonImg} />
        </Row>
      </Styled.PoweredArea>
    </Styled.Container>
  )
}

export default HeroTextArea

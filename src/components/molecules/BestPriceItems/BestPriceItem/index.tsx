// External libs
import Image from 'next/image'

// Assets

// Componentes
import Typography from '@/components/atoms/Typography'
import Anchor from '@/components/atoms/Anchor'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
interface IBestPriceItemProps {
  title: string
  image: string
  description: string
  link: string
}

const BestPriceItem: React.FC<IBestPriceItemProps> = ({
  title,
  image,
  link,
  description
}) => {
  return (
    <Anchor href={link} target="_blank">
      <Styled.Container data-aos="zoom-in">
        <Styled.Header>
          <Typography as="heading2">{title}</Typography>
        </Styled.Header>
        <Styled.Image>
          <Image width={130} height={130} src={image} />
        </Styled.Image>
        <Styled.Description>
          <Typography as="body2">{description}</Typography>
        </Styled.Description>
      </Styled.Container>
    </Anchor>
  )
}

export default BestPriceItem

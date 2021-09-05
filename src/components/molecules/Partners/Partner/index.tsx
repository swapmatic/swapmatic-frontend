// External libs

// Assets

// Componentes
import Anchor from '@/components/atoms/Anchor'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
interface IPartner {
  image: string
  name: string
  link: string
}

interface IPartnerProps {
  partner: IPartner
}

const Partner: React.FC<IPartnerProps> = ({ partner }) => {
  return (
    <Anchor target="_blank" href={partner.link}>
      <Styled.Container>
        <Styled.Image src={partner.image} />
      </Styled.Container>
    </Anchor>
  )
}

export default Partner

// External libs

// Assets
import LinkedinSvg from '../../../../assets/svgs/linkedin_small.svg'
import DiscordSvg from '../../../../assets/svgs/discord_small.svg'
import InstagramSvg from '../../../../assets/svgs/instagram_small.svg'
import MediumSvg from '../../../../assets/svgs/medium_small.svg'
import TelegramSvg from '../../../../assets/svgs/telegram_small.svg'
import TwitterSvg from '../../../../assets/svgs/twitter_small.svg'

// Componentes

// Subcomponentes and style
import * as Styled from './styles'
import Link from '@/components/atoms/Link'

// Services

// Types
export interface IItem {
  type: keyof typeof socialMedias
  link: string
}

interface IFooterSocialItemProps {
  social: IItem
}

const socialMedias = {
  linkedin: <LinkedinSvg />,
  discord: <DiscordSvg />,
  medium: <MediumSvg />,
  telegram: <TelegramSvg />,
  twitter: <TwitterSvg />,
  instagram: <InstagramSvg />
}

const FooterSocialItem: React.FC<IFooterSocialItemProps> = ({ social }) => {
  return (
    <Link href={social.link}>
      <Styled.Container>{socialMedias[social.type]}</Styled.Container>
    </Link>
  )
}

export default FooterSocialItem

// External libs

// Assets

// Componentes
import FooterSocialItem, { IItem } from './FooterSocialItem'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const socialItemsList: IItem[] = [
  {
    type: 'telegram',
    link: 'https://t.me/joinchat/bOKzcrdDBgdhOTRh'
  },
  {
    type: 'twitter',
    link: 'https://twitter.com/swapmatic'
  },
  {
    type: 'instagram',
    link: 'https://www.instagram.com/swapmatic/'
  },
  {
    type: 'medium',
    link: 'https://medium.com/swapmatic'
  },
  {
    type: 'discord',
    link: 'https://discord.com/invite/k7NB4wc'
  }
]

const FooterSocialItems: React.FC = () => {
  return (
    <Styled.Container>
      {socialItemsList.map(item => (
        <FooterSocialItem key={item.link} social={item} />
      ))}
    </Styled.Container>
  )
}

export default FooterSocialItems

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
    link: '#'
  },
  {
    type: 'linkedin',
    link: '#'
  },
  {
    type: 'twitter',
    link: '#'
  },
  {
    type: 'instagram',
    link: '#'
  },
  {
    type: 'medium',
    link: '#'
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

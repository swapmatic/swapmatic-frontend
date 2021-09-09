// External libs

// Assets

// Componentes
import Link from '@/components/atoms/Link'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface IMenuProps {
  isMenuToggle: boolean
  setIsMenuToggle: (data: false) => void
}

const links = [
  {
    type: 'Anchor',
    title: 'Home',
    href: '/#home'
  },
  /* {
    type: 'Anchor',
    title: 'Best price',
    href: '/#bestprice'
  }, */
  {
    type: 'Anchor',
    title: 'Apps',
    href: '/#apps'
  },
  {
    type: 'Anchor',
    title: 'Farming',
    href: '/pools'
  },
  {
    type: 'Anchor',
    title: 'Staking',
    href: '/staking'
  },
  {
    type: 'Anchor',
    title: 'Roadmap',
    href: '/#roadmap'
  },
  {
    type: 'Anchor',
    title: 'Info',
    href: '/#token'
  }
  /* {
    type: 'Anchor',
    title: 'Team',
    href: '/#team'
  }, */
]

const Menu: React.FC<IMenuProps> = ({ isMenuToggle, setIsMenuToggle }) => {
  return (
    <Styled.Container isMenuToggle={isMenuToggle}>
      {links.map(item => (
        <Styled.MenuItem
          onClick={() => setIsMenuToggle(false)}
          key={item.title}
        >
          <Link href={item.href}>
            <Typography as="body2">{item.title}</Typography>
          </Link>
        </Styled.MenuItem>
      ))}
    </Styled.Container>
  )
}

export default Menu

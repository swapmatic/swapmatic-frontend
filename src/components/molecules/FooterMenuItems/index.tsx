// External libs

// Assets

// Componentes
import Link from '@/components/atoms/Link'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
interface IItem {
  title: string
  link: string
}

interface IFooterMenuItems {
  left: IItem[]
  right: IItem[]
}

const footerMenuItemsList: IFooterMenuItems = {
  left: [
    {
      title: 'Liquidity Mining',
      link: '#'
    },
    {
      title: 'Token List',
      link: '#'
    },
    {
      title: 'Whitepaper',
      link: '#'
    },
    {
      title: 'Github',
      link: '#'
    }
  ],
  right: [
    {
      title: 'Uniswap',
      link: '#'
    },
    {
      title: 'Quickswap',
      link: '#'
    },
    {
      title: 'Coinpaprika',
      link: '#'
    },
    {
      title: 'Etherscan',
      link: '#'
    },
    {
      title: 'Polygon',
      link: '#'
    }
  ]
}

const FooterMenuItems: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Split>
        {footerMenuItemsList.left.map(item => (
          <li key={item.title}>
            <Link href={item.link}>
              <Typography color="var(--color-gray-800)" as="body2">
                {item.title}
              </Typography>
            </Link>
          </li>
        ))}
      </Styled.Split>
      <Styled.Split>
        {footerMenuItemsList.right.map(item => (
          <li key={item.title}>
            <Link href={item.link}>
              <Typography color="var(--color-gray-800)" as="body2">
                {item.title}
              </Typography>
            </Link>
          </li>
        ))}
      </Styled.Split>
    </Styled.Container>
  )
}

export default FooterMenuItems

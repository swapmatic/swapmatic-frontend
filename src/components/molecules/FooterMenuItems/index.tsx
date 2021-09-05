// External libs

// Assets

// Componentes
import Typography from '@/components/atoms/Typography'
import Anchor from '@/components/atoms/Anchor'

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
      title: 'BlockTimeWorld',
      link: 'https://blocktimeworld.com/'
    },
    {
      title: 'Swapman NFT',
      link: 'https://polygonscan.com/token/0xfe1323b8819a3e5ee9a9737db2778cf3bfa30d2f'
    },
    {
      title: 'Opensea',
      link: 'https://opensea.io/collection/swapman-nft'
    },
    {
      title: 'Swapdog',
      link: 'https://swapdog.io/'
    }
  ],
  right: [
    {
      title: 'SwapMatic Token',
      link: 'https://polygonscan.com/address/0x94C18174840F80D49d59DC3a1742aF0B884A8184'
    },
    {
      title: 'QuickSwap',
      link: 'https://info.quickswap.exchange/token/0x94c18174840f80d49d59dc3a1742af0b884a8184'
    },
    {
      title: 'Dfyn',
      link: 'https://info.dfyn.network/token/0x94c18174840f80d49d59dc3a1742af0b884a8184'
    },
    {
      title: 'Github',
      link: 'https://github.com/swapmatic'
    }
  ]
}

const FooterMenuItems: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Split>
        {footerMenuItemsList.left.map(item => (
          <li key={item.title}>
            <Anchor target="_blank" href={item.link}>
              <Typography color="var(--color-gray-800)" as="body2">
                {item.title}
              </Typography>
            </Anchor>
          </li>
        ))}
      </Styled.Split>
      <Styled.Split>
        {footerMenuItemsList.right.map(item => (
          <li key={item.title}>
            <Anchor target="_blank" href={item.link}>
              <Typography color="var(--color-gray-800)" as="body2">
                {item.title}
              </Typography>
            </Anchor>
          </li>
        ))}
      </Styled.Split>
    </Styled.Container>
  )
}

export default FooterMenuItems

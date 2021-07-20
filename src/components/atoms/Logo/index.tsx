// External libs
import Link from 'next/link'

// Assets
import LogoImg from '../../../assets/imgs/logo.webp'
import LogotypeImg from '../../../assets/imgs/logotype.webp'

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
interface ILogoProps {
  type: 'logo' | 'logotype'
}

const Logo: React.FC<ILogoProps> = ({ type, ...rest }) => {
  return (
    <Link href="/" passHref>
      <Styled.Container
        src={type === 'logo' ? LogoImg : LogotypeImg}
        objectFit="contain"
        {...rest}
      />
    </Link>
  )
}

export default Logo

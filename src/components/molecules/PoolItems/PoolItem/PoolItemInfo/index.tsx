// External libs

// Assets

// Componentes
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
interface IPoolItemInfoProps {
  title: string
  info: string
}

const PoolItemInfo: React.FC<IPoolItemInfoProps> = ({ title, info }) => {
  return (
    <Styled.Container>
      <Typography marginBottom="0.1rem" as="body4">
        {title}
      </Typography>
      <Typography as="body2">{info}</Typography>
    </Styled.Container>
  )
}

export default PoolItemInfo

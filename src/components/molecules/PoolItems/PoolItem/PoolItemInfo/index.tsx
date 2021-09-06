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
  color?: 'green' | 'white'
}

const PoolItemInfo: React.FC<IPoolItemInfoProps> = ({ color, title, info }) => {
  return (
    <Styled.Container>
      <Typography marginBottom="0.1rem" as="body4">
        {title}
      </Typography>
      <Typography
        color={
          color === 'green' ? 'var(--color-success)' : 'var(--color-white)'
        }
        as="body2"
      >
        {info}
      </Typography>
    </Styled.Container>
  )
}

export default PoolItemInfo

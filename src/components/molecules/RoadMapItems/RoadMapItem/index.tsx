// External libs

// Assets

// Componentes
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface IRoadMapItemProps {
  description: string
  status: boolean
}

const RoadMapItem: React.FC<IRoadMapItemProps> = ({ description, status }) => {
  return (
    <Styled.Container>
      <Styled.CheckSphere status={status} />
      <Typography as="body1" align="center">
        {description}
      </Typography>
    </Styled.Container>
  )
}

export default RoadMapItem

// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import * as Styled from './styles'

// Services

// Types
interface IFlipProps {
  timer?: number
}

const Flip: React.FC<IFlipProps> = ({ timer }) => {
  return (
    <Styled.Container className="flip-animation">
      <Typography as="heading1">{timer}</Typography>
      <Styled.FlipContainer>
        <div></div>
        <div></div>
        <div />
      </Styled.FlipContainer>
    </Styled.Container>
  )
}

export default Flip

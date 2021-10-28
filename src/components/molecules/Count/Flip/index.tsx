// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import * as Styled from './styles'

// Services

// Types
export interface IFlipProps {
  timer: number
  title: string
}

const Flip: React.FC<IFlipProps> = ({ timer, title }) => {
  const clock = timer < 10 ? `0${timer}` : timer

  return (
    <Styled.Container>
      <Typography marginBottom="1rem" as="heading3">
        {title}
      </Typography>
      <Styled.FlipContainer timer={timer}>
        <div>
          <Typography as="heading1">{clock}</Typography>
        </div>
        <div>
          <Typography as="heading1">{clock}</Typography>
        </div>
        <div>
          <Typography as="heading1">{clock}</Typography>
        </div>
        <div />
      </Styled.FlipContainer>
    </Styled.Container>
  )
}

export default Flip

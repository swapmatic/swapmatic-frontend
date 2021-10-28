// External libs
import ImageAbsolute from '@/components/atoms/ImageAbsolute'

// Assets
import superSwapImg from '../../../assets/imgs/super_swap.webp'

// Componentes
import Count from '@/components/molecules/Count'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const SuperSwap: React.FC = () => {
  return (
    <Styled.Container>
      <ImageAbsolute
        image={{
          src: superSwapImg,
          alt: 'SuperSwap Logo',
          width: 1200,
          height: 500,
          objectFit: 'contain'
        }}
        position={{
          left: '50%',
          top: '50%',
          translation: { x: '-50%', y: '-50%' },
          zIndex: 1
        }}
      />
      <Count />
    </Styled.Container>
  )
}

export default SuperSwap

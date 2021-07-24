// External libs

// Assets
import HeroImg from '../../../assets/imgs/hero.webp'
import RadBigSvg from '../../../assets/svgs/rad_big.svg'

// Componentes
import ImageAbsolute from '@/components/atoms/ImageAbsolute'
import SvgAbsolute from '@/components/atoms/SvgAbsolute'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const HeroImageArea: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.RadHero>
        <SvgAbsolute
          src={RadBigSvg}
          position={{
            right: '0',
            translation: { x: '-3%', y: '-67%' },
            zIndex: -1
          }}
        />
        <ImageAbsolute
          image={{
            src: HeroImg,
            alt: 'Swapmatic Hero',
            width: 343,
            height: 505
          }}
          position={{
            right: '0',
            translation: { x: '-50%', y: '-50%' },
            zIndex: -1
          }}
        />
      </Styled.RadHero>
    </Styled.Container>
  )
}

export default HeroImageArea

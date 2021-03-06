// External libs

// Assets

// Componentes
import FooterMenuItems from '@/components/molecules/FooterMenuItems'
import FooterSocialItems from '@/components/molecules/FooterSocialItems'
import Logo from '@/components/atoms/Logo'
import Typography from '@/components/atoms/Typography'
import Wrapper from '@/components/atoms/Wrapper'

// Subcomponentes and style
import * as Styled from './styles'
import Anchor from '@/components/atoms/Anchor'

// Services

// Types

const Footer: React.FC = () => {
  return (
    <Styled.Container>
      <Wrapper>
        <Styled.Content>
          <Styled.LogoSocial>
            <Logo type="logotype" />
            <FooterSocialItems />
          </Styled.LogoSocial>
          <div />
          <FooterMenuItems />
          <Typography color="var(--color-gray-800)" marginTop="3rem" as="body2">
            Copyright © 2021 SwapMatic - All Rights Reserved.
          </Typography>
          <div />
          <Typography
            color="var(--color-gray-800)"
            align="center"
            marginTop="3rem"
            as="body2"
          >
            Powered by{' '}
            <Anchor
              target="_blank"
              color="var(--color-primary)"
              href="https://0x.org/"
            >
              0x
            </Anchor>{' '}
            &{' '}
            <Anchor
              target="_blank"
              color="var(--color-primary)"
              href="https://polygon.technology/"
            >
              Polygon
            </Anchor>
          </Typography>
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Footer

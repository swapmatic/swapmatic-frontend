// External libs

// Assets

// Componentes
import Partners from '@/components/molecules/Partners'
import Wrapper from '@/components/atoms/Wrapper'
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Partnership: React.FC = () => {
  return (
    <Styled.Container>
      <Wrapper>
        <Styled.Content>
          <Typography
            as="heading1"
            align="center"
            marginTop="8rem"
            marginBottom="4rem"
          >
            Partners
          </Typography>
          <Partners />
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Partnership

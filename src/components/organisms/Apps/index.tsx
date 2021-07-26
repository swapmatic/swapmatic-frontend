// External libs

// Assets

// Componentes
import Wrapper from '@/components/atoms/Wrapper'
import AppList from '@/components/molecules/AppList'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Apps: React.FC = () => {
  return (
    <Styled.Container>
      <Wrapper>
        <Styled.Content>
          <AppList />
        </Styled.Content>
      </Wrapper>
    </Styled.Container>
  )
}

export default Apps

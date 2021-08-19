// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import * as Styled from './styles'
import Button from '@/components/atoms/Button'

// Services

// Types
interface IPoolItemDetailsModalProps {
  id: number
  setIsModal: (data: false) => void
}

const PoolItemDetailsModal: React.FC<IPoolItemDetailsModalProps> = ({
  id,
  setIsModal
}) => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.HeaderContainer>
          <Typography as="heading1" color="var(--color-black)">
            QuickSwap
          </Typography>
          <Styled.TokensPairContainer>
            <Typography as="body1" marginLeft="1rem" color="var(--color-black)">
              SWAM-MATIC
            </Typography>
          </Styled.TokensPairContainer>
        </Styled.HeaderContainer>
        <Styled.ButtonContainer>
          <Button
            colorVariant="primary"
            marginTop="1rem"
            marginBottom="1rem"
            sizeVariant="max"
          >
            Manage
          </Button>
          <Button
            colorVariant="primaryReverse"
            sizeVariant="max"
            onClick={() => setIsModal(false)}
          >
            Close
          </Button>
        </Styled.ButtonContainer>
      </Styled.Content>
    </Styled.Container>
  )
}

export default PoolItemDetailsModal

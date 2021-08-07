// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '../Typography'
import * as Styled from './styles'

// Services

// Types
export interface IToggleSwitchProps {
  marginLeft?: string
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  isStaked: boolean
  setIsStaked: (data: boolean) => void
}

const ToggleSwitch: React.FC<IToggleSwitchProps> = ({
  isStaked,
  setIsStaked,
  ...rest
}) => {
  return (
    <Styled.Container>
      <Typography as="body4" marginRight="0.5rem">
        Staked Only
      </Typography>
      <Styled.Content {...rest}>
        <input onClick={() => setIsStaked(!isStaked)} type="checkbox" />
        <span className="slider round" />
      </Styled.Content>
    </Styled.Container>
  )
}

export default ToggleSwitch

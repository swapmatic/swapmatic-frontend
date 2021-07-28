// External libs

// Assets

// Componentes
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import Anchor from '@/components/atoms/Anchor'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
interface IAppListItemProps {
  title: string
  description: string
  link: string
}

const AppListItem: React.FC<IAppListItemProps> = ({
  title,
  description,
  link
}) => {
  return (
    <Styled.Container data-aos="zoom-in">
      <Styled.Title>
        <Typography as="heading3">{title}</Typography>
      </Styled.Title>
      <Styled.Description>
        <Typography align="center" as="body1">
          {description}
        </Typography>
      </Styled.Description>
      <Styled.Action>
        <Anchor href={link}>
          <Button sizeVariant="medium" colorVariant="primary">
            Launch App
          </Button>
        </Anchor>
      </Styled.Action>
    </Styled.Container>
  )
}

export default AppListItem

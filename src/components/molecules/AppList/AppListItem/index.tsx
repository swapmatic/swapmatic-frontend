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
  newPage: boolean
}

const AppListItem: React.FC<IAppListItemProps> = ({
  title,
  description,
  link,
  newPage
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
        {newPage && (
          <Anchor href={link} target="_blank">
            <Button sizeVariant="medium" colorVariant="primary">
              Launch App
            </Button>
          </Anchor>
        )}
        {!newPage && (
          <Anchor href={link}>
            <Button sizeVariant="medium" colorVariant="primary">
              Launch App
            </Button>
          </Anchor>
        )}
      </Styled.Action>
    </Styled.Container>
  )
}

export default AppListItem

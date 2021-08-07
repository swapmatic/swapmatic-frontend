// External libs

// Assets

// Componentes

// Subcomponentes and style
import Anchor from '@/components/atoms/Anchor'
import Typography from '@/components/atoms/Typography'
import * as Styled from './styles'

// Services

// Types
interface ISplitInfo {
  title: string
  value: string
  link?: boolean
}

interface ISplitInfoProps {
  info: ISplitInfo
}
const SplitInfo: React.FC<ISplitInfoProps> = ({ info }) => {
  return (
    <Styled.Container>
      <Styled.ContentLeft>
        <Typography as="body3" align="center" color="var(--color-black)">
          {info.title}
        </Typography>
      </Styled.ContentLeft>
      <Styled.ContentRight>
        <Typography as="body3" color="var(--color-black)">
          {info.link && (
            <Anchor href={info.value} target="_blank">
              {info.value}
            </Anchor>
          )}
          {!info.link && info.value}
        </Typography>
      </Styled.ContentRight>
    </Styled.Container>
  )
}

export default SplitInfo

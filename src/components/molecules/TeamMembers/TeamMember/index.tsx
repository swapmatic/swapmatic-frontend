// External libs

// Assets
import LinkedinSvg from '../../../../assets/svgs/linkedin_small.svg'
import DiscordSvg from '../../../../assets/svgs/discord_small.svg'
import InstagramSvg from '../../../../assets/svgs/instagram_small.svg'
import MediumSvg from '../../../../assets/svgs/medium_small.svg'
import TelegramSvg from '../../../../assets/svgs/telegram_small.svg'
import TwitterSvg from '../../../../assets/svgs/twitter_small.svg'

// Componentes
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'
import Anchor from '@/components/atoms/Anchor'

// Services

// Types
export interface ITeamMember {
  image: string
  name: string
  skill: string
  social: [
    {
      type: keyof typeof socialMedias
      link: string
    }
  ]
}

export interface ITeamMemberProps {
  member: ITeamMember
}

const socialMedias = {
  linkedin: <LinkedinSvg />,
  discord: <DiscordSvg />,
  medium: <MediumSvg />,
  telegram: <TelegramSvg />,
  twitter: <TwitterSvg />,
  instagram: <InstagramSvg />
}

const TeamMember: React.FC<ITeamMemberProps> = ({ member }) => {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.ImageContent>
          <Styled.Image
            objectFit="contain"
            alt="Lorem Ipsum"
            src={member.image}
          />
        </Styled.ImageContent>
      </Styled.ImageContainer>
      <Styled.NameContent>
        <Typography as="heading3" align="center">
          {member.name}
        </Typography>
      </Styled.NameContent>
      <Styled.SkillsContent>
        <Typography as="body2" align="center">
          {member.skill}
        </Typography>
      </Styled.SkillsContent>
      <Styled.SocialContent>
        {member.social.map(item => (
          <Anchor key={item.link} marginRight="0.5rem" href={item.link}>
            {socialMedias[item.type]}
          </Anchor>
        ))}
      </Styled.SocialContent>
    </Styled.Container>
  )
}

export default TeamMember

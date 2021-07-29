// External libs

// Assets
import FakeImg from '../../../assets/imgs/user.webp'

// Componentes
import TeamMember from '@/components/molecules/TeamMembers/TeamMember'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
import { ITeamMember } from './TeamMember'

const teamMembersList: ITeamMember[] = [
  {
    image: FakeImg,
    name: 'Lorem Ipsum',
    skill: 'Front-End Developer',
    social: [{ type: 'linkedin', link: '#' }]
  },
  {
    image: FakeImg,
    name: 'Lorem Ipsum',
    skill: 'Front-End Developer',
    social: [{ type: 'linkedin', link: '#' }]
  },
  {
    image: FakeImg,
    name: 'Lorem Ipsum',
    skill: 'Front-End Developer',
    social: [{ type: 'linkedin', link: '#' }]
  },
  {
    image: FakeImg,
    name: 'Lorem Ipsum',
    skill: 'Front-End Developer',
    social: [{ type: 'linkedin', link: '#' }]
  },
  {
    image: FakeImg,
    name: 'Lorem Ipsum',
    skill: 'Front-End Developer',
    social: [{ type: 'linkedin', link: '#' }]
  },
  {
    image: FakeImg,
    name: 'Lorem Ipsum',
    skill: 'Front-End Developer',
    social: [{ type: 'linkedin', link: '#' }]
  }
]

const TeamMembers: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        {teamMembersList.map(item => (
          <TeamMember key={item.name} member={item} />
        ))}
      </Styled.Content>
    </Styled.Container>
  )
}

export default TeamMembers

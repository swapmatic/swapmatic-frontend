import styled from 'styled-components'

import facepaint from 'facepaint'
import themes from '@/styles/theme'

const mq = facepaint(themes.breakpoints)

export const Container = styled.ul`
  list-style: none;
  ${mq({ display: ['none', 'flex'] })}
`

export const MenuItem = styled.li`
  margin-left: 2rem;
`

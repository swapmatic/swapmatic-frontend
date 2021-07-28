import styled from 'styled-components'
import facepaint from 'facepaint'
import themes from '@/styles/theme'

const mq = facepaint(themes.breakpoints)

export const Container = styled.ul`
  margin-top: 0.5rem;
  list-style: none;
  display: flex;
  max-width: fit-content;
  ${mq({ margin: ['auto', 'inherit'] })}

  & > a:not(:last-child) {
    margin-right: 0.5rem;
  }
`

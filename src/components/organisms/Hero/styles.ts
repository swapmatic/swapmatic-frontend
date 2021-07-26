import styled from 'styled-components'

import facepaint from 'facepaint'
import themes from '@/styles/theme'

const mq = facepaint(themes.breakpoints)

export const Container = styled.div`
  padding-top: 3.5rem;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: calc(100vh - 3.5rem);
  padding: 0 1rem;
`

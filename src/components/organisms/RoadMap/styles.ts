import styled from 'styled-components'
import facepaint from 'facepaint'
import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding: 0 2rem;
  padding-top: 10rem;
  ${mq({
    'margin-bottom': ['10rem', '4rem'],
    'margin-top': ['10rem', '14rem']
  })}
`

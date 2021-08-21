import styled from 'styled-components'
import facepaint from 'facepaint'
import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export const Container = styled.div`
  padding-top: 3.5rem;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`

export const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: calc(100vh - 3.5rem);
  padding: 0 1rem;

  & > div:nth-child(2) {
    ${mq({ top: ['30%', 'inherit'] })}
  }
`

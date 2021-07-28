import styled from 'styled-components'
import theme from '@/styles/theme'
import facepaint from 'facepaint'

const mq = facepaint(theme.breakpoints)

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
  background: var(--color-gradient-4);

  &::before {
    content: url('./waves.svg');
    display: block;
    position: relative;
    width: 100vw;
    bottom: 0;
    background: transparent;
    z-index: 1;
  }
`

export const Content = styled.div`
  display: grid;
  ${mq({
    'grid-template-rows': ['1fr 0.4fr 1fr 0fr 0fr 1fr', '1fr 1fr 1fr'],
    'grid-template-columns': ['1fr', '1fr 1fr 2fr']
  })}
  position: relative;
  padding: 4rem 2rem 0rem 2rem;
`

export const LogoSocial = styled.div``

import styled from 'styled-components'
import facepaint from 'facepaint'
import themes from '@/styles/theme'
import { fadeinFromBottom } from '@/styles/animations'

const mq = facepaint(themes.breakpoints)

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

export const Content = styled.div`
  background-color: var(--color-gradient-1);
  border-radius: var(--border-radius);
  max-height: 80%;
  width: 100%;
  max-width: 35rem;
  ${mq({ padding: ['1rem', '2rem'] })}
  animation: 1s ${fadeinFromBottom}
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  ${mq({ 'flex-direction': ['column', 'row'] })}
`

export const ButtonContainer = styled.div``

export const TokensPairContainer = styled.div`
  display: flex;
  align-items: center;
`

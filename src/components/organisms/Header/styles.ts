import styled from 'styled-components'
import facepaint from 'facepaint'
import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export const Container = styled.div`
  height: 3.5rem;
  width: 100%;
  display: flex;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;

  & > button:last-child {
    ${mq({ display: ['none', 'block'] })}
  }
`

export const MenuToggleButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  margin-left: auto;
  z-index: 2;

  ${mq({ display: ['block', 'none'] })}

  & > div {
    width: 31px;
    height: 3px;
    background: var(--color-white);
  }

  & > div:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`

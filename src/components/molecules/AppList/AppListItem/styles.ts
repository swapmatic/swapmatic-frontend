import styled from 'styled-components'
import facepaint from 'facepaint'
import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export const Container = styled.div`
  display: grid;
  ${mq({
    'grid-template-columns': ['1fr', '3fr 7fr 3fr'],
    'grid-template-rows': ['2fr 2fr 3fr', '1fr']
  })}
  width: 100%;
  min-height: 5rem;
  background: var(--color-black);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius);
  transition: all 0.5s;
  margin: 1rem 0;

  &:hover {
    box-shadow: 0px 0px 15px var(--color-primary);
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Description = styled.div`
  display: flex;
  ${mq({
    'justify-content': ['center', 'center'],
    padding: ['1rem', '0']
  })}
  align-items: center;
  height: 100%;
`

export const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

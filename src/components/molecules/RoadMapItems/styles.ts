import styled from 'styled-components'
import theme from '@/styles/theme'
import facepaint from 'facepaint'

const mq = facepaint(theme.breakpoints)

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 5rem;

  & > :nth-child(2n) {
    padding: 0 3rem 0.5rem 2rem;
    transform: translateX(-50%);

    & > div {
      right: 0;
      left: inherit;
      transform: translate(50%, 50%);
    }
  }
`

export const Line = styled.div`
  position: absolute;
  ${mq({
    'border-right': [
      '0.2rem solid var(--color-white)',
      '0.4rem solid var(--color-white)'
    ]
  })}
  height: 100%;
  width: 0;
  right: 50%;
  transform: translateX(50%);
`

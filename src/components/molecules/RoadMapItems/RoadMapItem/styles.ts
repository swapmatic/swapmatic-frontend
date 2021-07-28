import styled from 'styled-components'
import facepaint from 'facepaint'
import theme from '@/styles/theme'
import { IRoadMapItemProps } from './index'

const mq = facepaint(theme.breakpoints)

type ICheckSphere = Pick<IRoadMapItemProps, 'status'>

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  ${mq({
    'border-bottom': [
      '0.2rem solid var(--color-white)',
      '0.4rem solid var(--color-white)'
    ]
  })}
  padding: 0 2rem 0.5rem 3rem;
  max-width: 50%;
  margin: auto;
  margin-top: 4rem;
  transform: translateX(50%);
`

export const CheckSphere = styled.div<ICheckSphere>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3.1rem;
  width: 3.1rem;
  border-radius: 100%;
  background: ${props =>
    props.status ? 'var(--color-primary)' : 'var(--color-gray-500)'};
  ${mq({
    border: [
      '0.2rem solid var(--color-white)',
      '0.4rem solid var(--color-white)'
    ]
  })}
  transform: translate(-50%, 50%);
`

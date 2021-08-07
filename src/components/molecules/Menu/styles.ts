import styled from 'styled-components'

import facepaint from 'facepaint'
import themes from '@/styles/theme'

import { IMenuProps } from './index'

const mq = facepaint(themes.breakpoints)

type IContainerProps = Omit<IMenuProps, 'setIsMenuToggle'>

export const Container = styled.ul<IContainerProps>`
  list-style: none;
  display: flex;
  background: red;
  transition: 0.5s transform;

  ${mq({
    'justify-content': ['center', 'inherit'],
    'align-items': ['center', 'inherit'],
    'flex-direction': ['column', 'inherit'],
    'background-color': ['rgba(0,0,0,0.8)', 'inherit'],
    'backdrop-filter': ['blur(150px)', 'inherit'],
    transform: ['translateX(100%)', 'inherit'],
    position: ['fixed', 'inherit'],
    height: ['100vh', 'inherit'],
    width: ['100vw', 'inherit'],
    top: ['0', 'inherit'],
    left: ['0', 'inherit']
  })}
  transform: ${props => props.isMenuToggle && 'translateX(0%)'};
  z-index: 2;
`

export const MenuItem = styled.li`
  ${mq({ 'margin-left': ['0', '2rem'], 'margin-bottom': ['2rem', 'inherit'] })}

  & > a > span {
    ${mq({ 'font-size': ['2rem', 'inherit'] })}
  }
`

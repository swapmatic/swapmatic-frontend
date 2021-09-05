/* eslint-disable no-tabs */
import styled, { keyframes } from 'styled-components'
import facepaint from 'facepaint'
import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

const backgroundRad = keyframes`
  0% { background-position: 0% 50%; }
	50% { background-position: 100% 50%; }
	100% { background-position: 0% 50%; }
`

export const Container = styled.li`
  min-height: 5rem;
  padding: 1rem;
  width: 100%;
  border-radius: var(--border-radius);
  opacity: 0.6;
  background: linear-gradient(
    -45deg,
    var(--color-gray-500),
    var(--color-gray-700),
    var(--color-gray-500)
  );
  background-size: 200% 200%;
  animation: 5s ${backgroundRad} infinite ease;
  border: 2px solid rgba(255, 255, 255, 0.1);

  & > div {
    height: 100%;
    margin: 1rem;
    border-radius: var(--border-radius);
    background: var(--color-gray-500);
  }

  ${mq({
    display: ['grid', 'grid'],
    'justify-content': ['inherit', 'space-between'],
    'align-items': ['inherit', 'center'],
    'grid-template-columns': [
      '1fr 1fr 1fr 1fr',
      '0.5fr 1.2fr 0.6fr 1fr 0.5fr 0.7fr 1fr'
    ],
    'grid-template-rows': ['1fr 1.5fr 2fr', '1fr']
  })};

  & > button {
    ${mq({ 'grid-column': ['span 4', 'inherit'] })};
    margin: auto;
  }

  & > div:nth-child(4) {
    ${mq({ 'grid-column': ['span 2', 'inherit'] })};
  }
`

export const PairTokensContainer = styled.div`
  ${mq({ 'grid-column': ['span 2', 'inherit'] })};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

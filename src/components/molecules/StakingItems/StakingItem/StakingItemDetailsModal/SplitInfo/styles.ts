import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  height: 3rem;
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: var(--color-white);
  margin-bottom: 0.2rem;
`

export const ContentLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentRight = styled.div`
  width: 95%;
  height: 80%;
  background-color: var(--color-gradient-1);
  margin: auto;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
`

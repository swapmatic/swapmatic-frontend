import styled from 'styled-components'
export const Container = styled.div`
  padding-top: 3.5rem;
  width: 100%;
  min-height: 100vh;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  height: calc(100vh - 3.5rem);
  padding: 0 1rem;
`

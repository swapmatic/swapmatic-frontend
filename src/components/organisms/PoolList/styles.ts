import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: visible;
  padding-top: 3.5rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  height: calc(100vh - 3.5rem);
  padding: 0 2rem;
  justify-content: flex-start;
`

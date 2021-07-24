import styled from 'styled-components'

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
`

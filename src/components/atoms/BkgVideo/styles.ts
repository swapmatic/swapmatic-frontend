import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  z-index: -1;

  & > video {
    min-width: 100%;
    min-height: 100%;
  }
`

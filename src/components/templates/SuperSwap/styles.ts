import styled from 'styled-components'

export const Container = styled.div`
  flex-direction: column;
  width: 100%;
  background-color: #12131c;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > div {
    width: 100%;
    max-width: 1200px;
  }
`

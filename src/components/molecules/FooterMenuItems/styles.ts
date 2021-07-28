import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

export const Split = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;

  & > li:not(:last-child) {
    margin-bottom: 0.3rem;
  }
`

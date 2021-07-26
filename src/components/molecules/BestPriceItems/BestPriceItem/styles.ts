import styled from 'styled-components'

export const Container = styled.button`
  border: none;
  outline: none;
  background: rgba(0, 0, 0, 0.6);
  border-radius: var(--border-radius);
  height: 24rem;
  width: 16rem;
  display: grid;
  grid-template-rows: 1.5fr 5fr 5fr;
  margin: 1rem;
  padding: 1rem;
  transition: 0.5s all;

  &:hover {
    background: #000000;
    box-shadow: 0px 0px 15px #2891f9;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
`

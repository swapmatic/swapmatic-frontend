import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
  margin-top: -1rem;
  background-color: var(--color-gradient-1);
  margin-top: 15rem;
  padding-bottom: 5rem;

  &::before {
    content: url('./wave.svg');
    display: block;
    position: absolute;
    width: 100vw;
    top: 0;
    transform: translateY(-90%);
    background: transparent;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding: 0 2rem;
`

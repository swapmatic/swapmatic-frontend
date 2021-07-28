import styled from 'styled-components'

export const Container = styled.li`
  height: 3.13rem;
  width: 3.13rem;
  border: 1px solid var(--color-gray-800);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  &:hover {
    background-color: var(--color-primary);
  }

  & > svg > path {
    fill: var(--color-gray-800);
  }
`

import styled from 'styled-components'

type TColapse = boolean

interface IContentProps {
  colapse: TColapse
}

interface IHeaderProps {
  colapse: TColapse
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--color-primary);
`

export const Header = styled.div<IHeaderProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;

  & > span > svg {
    transition: all 0.5s;
    transform: ${props => (props.colapse ? 'rotate(-90deg)' : 'rotate(0)')};
  }
`

export const Content = styled.div<IContentProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  padding: 0 1rem;
  max-height: ${props => (props.colapse ? '20rem' : '0')};
  overflow: hidden;
`

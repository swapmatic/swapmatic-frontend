import styled from 'styled-components'

export const Container = styled.div`
  width: 3.75rem;
  position: relative;
  display: flex;
  height: fit-content;
  & > div:first-child {
    margin-bottom: 0.5rem !important;
    z-index: 1;
  }
  & > div:last-child {
    z-index: 0;
    margin-left: -0.5rem !important;
    margin-top: 0.5rem !important;
  }
`

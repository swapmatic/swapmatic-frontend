import styled from 'styled-components'
import ImageNext from 'next/image'

export const Container = styled.div`
  max-height: 6.25rem;
  margin: 1rem;

  & > div {
    filter: saturate(0);
    transition: all 0.5s;
    &:hover {
      filter: saturate(1);
    }
  }
`

export const Image = styled(ImageNext)``

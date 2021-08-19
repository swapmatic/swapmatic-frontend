import styled from 'styled-components'
import ImageNext from 'next/image'
import facepaint from 'facepaint'
import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export const Container = styled.div`
  min-height: 16.25rem;
  padding-top: 1rem;
  width: 100%;
  display: grid;
  position: relative;
  ${mq({
    'grid-template-columns': ['1fr', '1fr 1fr'],
    'grid-template-rows': ['3fr 2fr', '1fr']
  })}
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const Image = styled(ImageNext)`
  width: 25rem;
  height: 12.5rem;
`

export const InfoContainer = styled.div`
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 25rem;
  ${mq({
    'align-items': ['center', 'flex-start'],
    width: ['100%', 'inherit'],
    margin: ['auto', 'inherit']
  })};
`

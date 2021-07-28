import styled from 'styled-components'
import ImageNext from 'next/image'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  margin: 1rem;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`

export const ImageContent = styled.div`
  height: 6.25rem;
  width: 6.25rem;
  overflow: hidden;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled(ImageNext)``

export const NameContent = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SkillsContent = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
`

export const SocialContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

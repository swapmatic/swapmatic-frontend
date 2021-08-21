import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  padding: 1rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImgContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BtnsContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

export const BtnContent = styled.div`
  padding: 0.2rem 0.5rem;
`

export const InfoContent = styled.div`
  margin-top: 0.5rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
`

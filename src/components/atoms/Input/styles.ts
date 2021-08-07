import styled, { css } from 'styled-components'

// Types
interface IStyledInputProps {
  isActive: boolean
}

// Styles
const LabelIsActive = css`
  top: -30%;
  left: 0.2rem;
  font-size: 0.6rem;
`

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  height: 2.5rem;
  width: auto;
`

export const Label = styled.label<IStyledInputProps>`
  font-size: 0.7rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.5rem;
  transition: all 0.5s;
  color: var(--color-white);
  pointer-events: none;
  ${props => props.isActive && LabelIsActive}
`

export const Content = styled.div<IStyledInputProps>`
  background: var(--color-gray-700);
  position: relative;
  width: 10rem;
  border-radius: var(--border-radius);
  height: 1.56rem;
`

export const Input = styled.input`
  height: 1.56rem;
  width: 100%;
  padding: 0 0.4rem;
  border: none;
  outline: none;
  background: transparent;
`

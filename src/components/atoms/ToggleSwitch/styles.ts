import styled from 'styled-components'
import { IToggleSwitchProps } from './index'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.label<
  Omit<IToggleSwitchProps, 'isStaked' | 'setIsStaked'>
>`
  position: relative;
  display: inline-block;
  width: 3.2rem;
  height: 1.56rem;

  margin-left: ${props => props.marginLeft || 'inherit'};
  margin-top: ${props => props.marginTop || 'inherit'};
  margin-right: ${props => props.marginRight || 'inherit'};
  margin-bottom: ${props => props.marginBottom || 'inherit'};

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-gray-700);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 1.1rem;
    width: 1.1rem;
    left: 4px;
    bottom: 4px;
    background-color: var(--color-white);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--color-primary);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--color-primary);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`

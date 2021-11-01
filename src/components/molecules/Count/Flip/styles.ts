import styled, { keyframes, css } from 'styled-components'
import { IFlipProps } from '.'

const testAnimation = keyframes`
  0% {
    transform: perspective(400px) rotateX(0deg) translateY(0%);
    background-color: rgba(15, 15, 15, 1);
    top: 0%;
  }
  50% {
    transform: perspective(400px) rotateX(-90deg) translateY(-50%);
    background-color: rgba(0, 0, 0, 1);
    top: 25%;
  }
  100% {
    transform: perspective(400px) rotateX(-90deg) translateY(-50%);
    background-color: rgba(0, 0, 0, 1);
    top: 50%;
  }
`

const testAnimation1 = keyframes`
  0% {
    transform: perspective(300px) rotateX(0deg) translateY(0%);
    background-color: rgba(15, 15, 15, 1);
    top: 0%;
  }
  50% {
    transform: perspective(300px) rotateX(-90deg) translateY(-50%);
    background-color: rgba(0, 0, 0, 1);
    top: 25%;
  }
  100% {
    transform: perspective(300px) rotateX(-90deg) translateY(-50%);
    background-color: rgba(0, 0, 0, 1);
    top: 50%;
  }
`

const testAnimation2 = keyframes`
  0% {
    transform: perspective(400px) rotateX(90deg) translateY(0%);
    background-color: rgba(0, 0, 0, 1);
    bottom: 0%;
  }
  50% {
    transform: perspective(400px) rotateX(90deg) translateY(50%);
    background-color: rgba(0, 0, 0, 1);
    bottom: 25%;
  }
  100% {
    transform: perspective(400px) rotateX(0deg) translateY(50%);
    background-color: rgba(15, 15, 15, 1);
    bottom: 50%;
  }
`

const testAnimation3 = keyframes`
  0% {
    transform: perspective(300px) rotateX(90deg) translateY(0%);
    background-color: rgba(0, 0, 0, 1);
    bottom: 0%;
  }
  50% {
    transform: perspective(300px) rotateX(90deg) translateY(50%);
    background-color: rgba(0, 0, 0, 1);
    bottom: 25%;
  }
  100% {
    transform: perspective(300px) rotateX(0deg) translateY(50%);
    background-color: rgba(15, 15, 15, 1);
    bottom: 50%;
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const FlipContainer = styled.div<Pick<IFlipProps, 'timer'>>`
  height: 80px;
  width: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(15, 15, 15, 1);
  box-shadow: black 0px 0px 20px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 50%;
    overflow: hidden;
  }

  & > div:first-child {
    z-index: 1;
    top: 0%;
    border-bottom: 1px solid rgba(15, 15, 15, 1);
    animation: ${({ timer }) =>
      timer
        ? css`
            ${timer % 2 === 0 ? testAnimation : testAnimation1} 0.8s
          `
        : css`
            ${timer % 2 === 0 ? testAnimation : testAnimation1} 0.8s
          `};
    & > h1 {
      transform: translateY(51%);
    }
  }

  & > div:nth-child(2) {
    z-index: 1;
    top: 25%;
    transform: perspective(300px) rotateX(90deg) translateY(0%);
    background-color: black;
    bottom: 0%;
    animation: ${({ timer }) =>
      timer
        ? css`
            ${timer % 2 === 0 ? testAnimation2 : testAnimation3} 0.8s
          `
        : css`
            ${timer % 2 === 0 ? testAnimation2 : testAnimation3} 0.8s
          `};
    border-top: 1px solid rgba(15, 15, 15, 1);
    & > h1 {
      transform: translateY(-52%);
    }
  }

  & > div:nth-child(3) {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    & > h1 {
    }
  }

  & > div:nth-child(4) {
    height: 50%;
    top: 0;
    z-index: 0;
  }
`

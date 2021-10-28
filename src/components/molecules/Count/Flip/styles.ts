import styled, { keyframes } from 'styled-components'

const testAnimation = keyframes`
  0% {
    height: 50%;
    top: 0;

    & > h1 {
      position: absolute;
    }
  }
  25% {
    height: 2%;
    top: 50%;
  }
  50% {
    height: 50%;
    top: 100%;
    transform: translateY(-100%);
  }
  75% {
    opacity: 0;
  }

  100% {
    opacity: 0;
  }
`

export const Container = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > h1 {
    z-index: 1;
  }
`

export const FlipContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  & > div {
    width: 100%;
    position: absolute;
  }

  & > div:first-child {
    height: 50%;
    top: 0;
    background: rgba(0, 0, 0, 1);
    animation-name: ${testAnimation};
    animation-duration: 1s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    z-index: -1;
  }

  & > div:nth-child(2) {
    height: 100%;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  & > div:nth-child(3) {
    height: 50%;
    top: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`

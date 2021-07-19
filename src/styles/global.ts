import { createGlobalStyle } from 'styled-components'

import facepaint from 'facepaint'
import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    // Colors
    --color-primary: #722456;
    --color-gray-500: #d0d0ce;
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-blue: #00ACED;

    // Text Colors
    --color-text-white: #FFFFFF;
    --color-text-black: #333333;
    --color-text-gray: #bbbcbc;

    // Sizes
    --max-width: 1200px;
    --border-radius: 0.31rem;
  }

  body {
    background-color: #000;
  }

  body, button, textarea, input {
    ${mq({ 'font-size': ['87.5%', '93.75%'] })}
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
    color: white;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

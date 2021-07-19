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
    --color-primary: #2891F9;
    --color-secundary: #153A71;
    --color-gray-500: #C2C2C2;
    --color-gray-700: #666666;
    --color-gray-800: #313A42;
    --color-black: #000000;
    --color-white: #FFFFFF;

    // Footer Gradient Colors
    --color-gradient-1: #E5F0FF;
    --color-gradient-2: #DEE8F7;
    --color-gradient-3: #D7E0ED;
    --color-gradient-4: #CCD5E1;

    // Alert Colors
    --color-danger: #EA5050;
    --color-warning: #D89F49;
    --color-success: #47D66F;

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

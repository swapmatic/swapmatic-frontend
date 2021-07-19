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
    // Colors ------------------------------------------------
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

    // Sizes ------------------------------------------------
    --max-width: 1000px;
    --border-radius: 0.31rem;

    // Text Sizes
    --text-size-heading-1: 2.25rem;
    --text-size-heading-2: 1.5rem;
    --text-size-heading-3: 1.125rem;
    --text-size-body-1: 0.81rem;
    --text-size-body-2: 0.81rem;
    --text-size-body-3: 0.63rem;
    --text-size-body-4: 0.63rem;

    // Text Weight
    --text-weight-heading-1: 700;
    --text-weight-heading-2: 700;
    --text-weight-heading-3: 700;
    --text-weight-body-1: 700;
    --text-weight-body-2: 400;
    --text-weight-body-3: 700;
    --text-weight-body-4: 400;
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

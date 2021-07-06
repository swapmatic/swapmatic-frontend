// Bibliotecas externas
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import Head from 'next/head'
// import Amplify from 'aws-amplify'

// Components

// Subcomponentes e estilo
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

// import config from '@/services/amplify/config'
// Amplify.configure({ ...config, ssr: true })

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>SwapMatic</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp

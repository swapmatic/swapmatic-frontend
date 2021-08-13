// Bibliotecas externas
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
// import Amplify from 'aws-amplify'

// Components

// Subcomponentes e estilo
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import AOS from 'aos'
// import config from '@/services/amplify/config'
// Amplify.configure({ ...config, ssr: true })

// Providers
import StatusProvider from '@/services/web3/status'

function getLibrary(provider: any) {
  return new Web3(provider)
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700 // values from 0 to 3000, with step 50ms
    })
  }, [])

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <StatusProvider>
        <ThemeProvider theme={theme}>
          <Head>
            <title>SwapMatic</title>
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon.ico"
            />
          </Head>

          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </StatusProvider>
    </Web3ReactProvider>
  )
}

export default MyApp

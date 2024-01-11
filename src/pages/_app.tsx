import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import { lightTheme, darkTheme } from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Head>
        <title>L30</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="The best Game Store in the world!" />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

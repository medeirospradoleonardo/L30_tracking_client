import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeSwitchProvider } from 'hooks/use-theme'
import { LanguageSwitchProvider } from 'hooks/use-language'

function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageSwitchProvider>
      <ThemeSwitchProvider>
        <Head>
          <title>L30</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="The best Game Store in the world!"
          />
        </Head>

        <Component {...pageProps} />
      </ThemeSwitchProvider>
    </LanguageSwitchProvider>
  )
}

export default App

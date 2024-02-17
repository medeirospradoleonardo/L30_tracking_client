import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeSwitchProvider } from 'hooks/use-theme'
import { LanguageSwitchProvider, useLanguage } from 'hooks/use-language'
import { ToastProvider } from 'hooks/use-toast'
import { AlertProvider, useAlert } from 'hooks/use-alert'

function App({ Component, pageProps }: AppProps) {
  const { quantity } = useAlert()
  const { language } = useLanguage()

  return (
    <LanguageSwitchProvider>
      <ThemeSwitchProvider>
        <AlertProvider>
          <ToastProvider>
            <Head>
              <html lang="pt-BR" />
              <title>
                {quantity > 0
                  ? `(${quantity}) L30 ${language.components.Logo.title}`
                  : `L30 ${language.components.Logo.title}`}
              </title>
              <link rel="shortcut icon" href="/img/icon-512-preto.png" />
              <link rel="apple-touch-icon" href="/img/icon-512-preto.png" />
              <link rel="manifest" href="/manifest.json" />
              <link rel="icon" href="/favicon.ico" sizes="any" />
              <meta name="theme-color" content="#06092B" />
              <meta
                name="description"
                content="The best Game Store in the world!"
              />
            </Head>
            <Component {...pageProps} />
          </ToastProvider>
        </AlertProvider>
      </ThemeSwitchProvider>
    </LanguageSwitchProvider>
  )
}

export default App

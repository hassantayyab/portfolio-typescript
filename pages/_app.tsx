import type { AppProps } from 'next/app'
import 'styles/base/_base.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

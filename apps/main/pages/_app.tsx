import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/examples-ui/layout'
import { getLayout } from '@vercel/examples-ui'
import '@vercel/examples-ui/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

  return (
    <>
      <h1>hello from dev</h1>
      <Layout title="Microfrontends" path="solutions/microfrontends">
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

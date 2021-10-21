// Components
import SuperSwap from '@/components/templates/SuperSwap'
import Head from 'next/head'

export default function Super() {
  return (
    <>
      <Head>
        <title>SuperSwap</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/faviconsuper.ico"
        />
        <meta charSet="utf-8" />
        <meta name="description" content="SwapMatic" />
      </Head>
      <SuperSwap />
    </>
  )
}

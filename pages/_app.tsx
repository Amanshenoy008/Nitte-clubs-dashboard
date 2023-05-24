import '@/styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <ParallaxProvider scrollAxis='vertical'>
    <Component {...pageProps} />
    </ParallaxProvider>
  
    </>
  )
}

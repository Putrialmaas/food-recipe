import '../styles/globals.css'
import { Raleway } from '@next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <main className={raleway.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp

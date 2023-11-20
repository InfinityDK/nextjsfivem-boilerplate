import WindowListener from '@/utils/windowlistener'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return <WindowListener>
    <Component {...pageProps} />
  </WindowListener>

}

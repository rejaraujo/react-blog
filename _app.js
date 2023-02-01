import Nav from '../components/Nav'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Nav />
    <main className='container'>
      <Component {...pageProps} />
    </main>
  </>
}

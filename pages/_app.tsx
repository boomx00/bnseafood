import '../styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios';
// axios.defaults.baseURL = "http://localhost:8000/api/v1/"
axios.defaults.baseURL = "https://dakoding.com/api/v1/"

// axios.defaults.withCredentials = true
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

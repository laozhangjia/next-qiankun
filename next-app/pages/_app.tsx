import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <script src={'/next-app/qinkun-entry.js'}></script>
        </Head>
    <Component {...pageProps} />
    </>
}

export default MyApp

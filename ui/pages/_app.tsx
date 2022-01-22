import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { AuthContextProvider } from '../context/auth';
import '../dist/output.css'

function MyApp({ Component, pageProps }: AppProps) {
   return (
       <AuthContextProvider>
       <Layout>
              <Component {...pageProps} />
        </Layout>
        </AuthContextProvider>
    ) 
}

export default MyApp

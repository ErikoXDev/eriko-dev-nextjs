import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PageLayout from '../components/PageLayout'
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  )
}

export default MyApp

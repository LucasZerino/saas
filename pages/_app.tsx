import '../styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import type { AppProps } from 'next/app'
import { LayoutApp } from 'components/Layouts/LayoutApp';
import { useRouter } from 'next/router';
import { LayoutPublic } from 'components/Layouts/LayoutPublic';
import { LayoutTenant } from 'components/Layouts/LayoutTenant';

function MyApp({ Component, pageProps }: AppProps) {
  let Layout = LayoutPublic
  const router = useRouter()
  const { pathname } = router

  if(pathname.indexOf('/app') === 0){
    Layout = LayoutApp
  }

  if(pathname.indexOf('/[slug]') === 0){
    Layout = LayoutTenant
  }

  return <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
}

export default MyApp

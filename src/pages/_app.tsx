import type { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Footer, Header, Layout } from '@src/componets';
import { LoaderProvider } from '@src/context';

import { Layout as LayoutBlocks } from 'blocks';
import theme from '../theme';

const { AppWrapper, ContentWrapper } = LayoutBlocks;

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => (
  <>
    <Head>
      <title>Natali Borei</title>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoaderProvider>
        <AppWrapper component='main'>
          <Header />
          <ContentWrapper>
            <Layout Component={Component} pageProps={pageProps} />
          </ContentWrapper>
          <Footer />
          {/* <CookiesAlert /> */}
        </AppWrapper>
      </LoaderProvider>
    </ThemeProvider>
  </>
);

export default App;

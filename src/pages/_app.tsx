import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Footer, Header, Layout } from '@src/componets';
import store from '@src/store';
import { LangEnum } from '@src/types';
import i18next from 'i18next';

import { Layout as LayoutBlocks } from 'blocks';
import theme from '../theme';

import common_en from 'public/translations/en/common.json';
import common_ru from 'public/translations/ru/common.json';

const { AppWrapper, ContentWrapper } = LayoutBlocks;

i18next.init({
  interpolation: { escapeValue: false },
  lng: LangEnum.EN,
  resources: {
    en: {
      common: common_en
    },
    ru: {
      common: common_ru
    }
  }
});

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => (
  <>
    <Head>
      <title>Natali Borei</title>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
    </Head>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18next}>
          <CssBaseline />
          <AppWrapper component='main'>
            <Header />
            <ContentWrapper>
              <Layout Component={Component} pageProps={pageProps} />
            </ContentWrapper>
            <Footer />
            {/* <CookiesAlert /> */}
          </AppWrapper>
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  </>
);

export default App;

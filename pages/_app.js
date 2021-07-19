import 'bootstrap/dist/css/bootstrap.min.css';
// import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux'
import { wrapper } from "../redux/store"

import Head from "next/head";
import App from 'next/app';
import Script from 'next/script'

import Layout from '../components/Layout';
import '../styles/style.scss'

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_ru from "../translations/ru/common.json";
import common_en from "../translations/en/common.json";
import { PersistGate as RealPersistGate, PersistGateProps } from "redux-persist/integration/react";

const canUseDom = !!((typeof window !== 'undefined' && window.document && window.document.createElement));

function PersistGate (props) {

    const { children, loading, persistor } =  props;

    if (canUseDom) return (
      <RealPersistGate loading={loading} persistor={persistor}>
        {children}
      </RealPersistGate>
    );

    return children;

}
i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
    en: {
      common: common_en               // 'common' is our custom namespace
    },
    ru: {
      common: common_ru
    },
  },
});


function MyApp({ Component, pageProps }) {
  const store = useStore();

  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <I18nextProvider i18n={i18next}>
        <Head>
          <title>Natali Borei</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="shortLogo.png" />
          <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Fira+Sans|Herr+Von+Muellerhoff"
            rel="stylesheet" />


          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />

        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nextProvider>
    </PersistGate>
  )

}

export default wrapper.withRedux(MyApp);

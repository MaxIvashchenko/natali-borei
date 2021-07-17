import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import Head from "next/head";
import App from 'next/app';
import Script from 'next/script'

import Layout from '../components/Layout';
import '../styles/style.scss'

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_ru from "../translations/ru/common.json";
import common_en from "../translations/en/common.json";

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


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <I18nextProvider i18n={i18next}>
        <Head>
          <title>Natali Borei</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="shortLogo.png" />
          <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond|Fira+Sans|Herr+Von+Muellerhoff"
            rel="stylesheet" />


          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
     
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nextProvider>
    )
  }
}

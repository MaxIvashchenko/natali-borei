import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux'
import { wrapper } from "store"

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_ru from "assets/translations/ru/common.json";
import common_en from "assets/translations/en/common.json";
import { useSelector } from 'react-redux'

import Layout from 'components/Layout';
import 'styles/style.scss'



function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  const lng = useSelector(({ language }) => language)

  i18next.init({
    interpolation: { escapeValue: false },
    lng,
    resources: {
      en: {
        common: common_en
      },
      ru: {
        common: common_ru
      },
    },
  });


  return (
    <I18nextProvider i18n={i18next}>
      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </I18nextProvider>

  );
}

export default wrapper.withRedux(MyApp);


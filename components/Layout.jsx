import Header from './Header/Header';
import Footer from './Footer/Footer';

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
export default function Layout({ children }) {
    const mainPage = '/'

    return (
        <I18nextProvider i18n={i18next}>

            <div className='layout'>
                <Header mainPage={mainPage} />

                {children}
                <Footer mainPage={mainPage} />
            </div>
        </I18nextProvider>

    );

}


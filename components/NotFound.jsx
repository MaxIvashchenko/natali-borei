import React from 'react'
import { useTranslation } from "react-i18next";
// import { useHistory } from "react-router-dom";


export default function NotFound({ mainPage }) {
    // const [t] = useTranslation('common');
    // const history = useHistory();
    // const toMainPage = () => history.push("/");

    return (
        <div className='NotFound'>
            <p className="number">404</p>
            {/* <p>{t('common.notFound')}</p>

            <p className='text'>{t('common.text')}</p>


            <button className="homeBtn" to={mainPage} onClick={toMainPage}>
                <div>
                    <p>{t('common.back')}</p>
                </div>
            </button> */}
        </div>
    )
}

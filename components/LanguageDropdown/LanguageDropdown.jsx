import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setLang } from 'store/language/action'
import { useTranslation } from "react-i18next";
import Image from 'next/image';

function LanguageDropdown(props) {
    const { i18n } = useTranslation('common');
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const lang = i18n.language;
    const url = require(`assets/images/lang/${lang}.png`);

    const changeLang = () => {
        setIsOpen(false)
        dispatch(setLang('ru'))
    }

    const clickHandler = () => lang === 'ru' ? dispatch(setLang('en')) : dispatch(setLang('ru'));

    return (
        <div className="LanguageDropdown">
            {/* <Button variant="link" onClick={() => setIsOpen(state => !state)}> */}
            <Button variant="link" onClick={clickHandler}>
                <Image src={url} width={30} height={30} alt="language icon" />
            </Button>

            {/* {isOpen ? <div className="dropdown">
                <Button style={{ color: "rgba(0,0,0,.5)", margin: 0 }} onClick={changeLang} variant="link">{t('header.ru')}</Button>
                <Button style={{ color: "rgba(0,0,0,.5)", padding: 0 }} onClick={() => dispatch(setLang('en'))} variant="link">{t('header.en')}</Button>

            </div>
                : <div />} */}
        </div>
    )
};

export default LanguageDropdown;


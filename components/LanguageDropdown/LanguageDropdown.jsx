import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setLang } from '../../store/language/action'
import { useTranslation } from "react-i18next";
import Image from 'next/image'

function LanguageDropdown(props) {
    const { t, i18n } = useTranslation('common');
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false)
    const lang = i18n.language;
    const im = require(`./../../images/lang/${lang}.png`);
    const icon = <Image src={im} width={30} height={30} />

    const changeLang = () => {
        setIsOpen(false)
        dispatch(setLang('ru'))
    }
    return (
        <div className="LanguageDropdown">
            <Button variant="link" onClick={() => setIsOpen(state => !state)}>
                <Image src={im} width={30} height={30} />
            </Button>

            {isOpen ? <div className="dropdown">
                <Button style={{ color: "rgba(0,0,0,.5)", margin: 0 }} onClick={changeLang} variant="link">{t('header.ru')}</Button>
                <Button style={{ color: "rgba(0,0,0,.5)", padding: 0 }} onClick={() => dispatch(setLang('en'))} variant="link">{t('header.en')}</Button>

            </div>
                : <div />}
        </div>
    )
}

LanguageDropdown.propTypes = {

}

export default LanguageDropdown


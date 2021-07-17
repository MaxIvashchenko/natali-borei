import { useTranslation } from "react-i18next";
import shortLogo from '../../images/shortLogo.png'
import Image from 'next/image'
import { Button, NavDropdown, Navbar, Nav } from 'react-bootstrap';

import NavItem from './NavItem'
import useWindowSize from "../../hooks/useWindowSize"


export default function Header({ mainPage }) {
    const { t, i18n } = useTranslation('common');
    const { width } = useWindowSize();

    const mobWidth = width < 992;

    return (
        <>
            <Navbar bg="light" expand="lg" className={`Header justify-content-end`}>
                {mobWidth &&
                    (
                        <>
                            <div style={{ position: "absolute", top: 25, left: 0, padding: "0px 5px", zIndex: 999 }}>
                                <Button style={{ color: "rgba(0,0,0,.5)", margin: 0 }} onClick={() => i18n.changeLanguage('ru')} variant="link">{t('header.ru')}</Button>
                                <Button style={{ color: "rgba(0,0,0,.5)", padding: 0 }} onClick={() => i18n.changeLanguage('en')} variant="link">{t('header.en')}</Button>
                            </div>
                            <div className="brand-centered">
                                <Navbar.Brand href={mainPage}>
                                    <Image width={70} height={70} className="shortLogo" src={shortLogo} alt="small logo" />

                                </Navbar.Brand>
                            </div>
                        </>
                    )
                }
                <Navbar.Toggle aria-controls="navbarScroll" className="m-2"/>
                <Navbar.Collapse id="navbarScroll" className="py-xs-4 px-xs-2" style={{ textAlign: "center",  }}>
                    <Nav
                        className=" my-2 my-lg-0"
                        style={{
                            maxHeight: '100px',
                            margin: '0 auto'
                        }}
                        navbarScroll
                    >
                        <NavItem href="/about" text={t('header.about')} />
                        <NavItem href="/shop/Necklace" text={t('header.shop')} />
                        <NavItem href="/collections" text={t('header.collections')} />
                        {!mobWidth &&
                            <Navbar.Brand className="" href={mainPage}>
                                <Image width={80} height={70} className="shortLogo" src={shortLogo} alt="small logo" />

                            </Navbar.Brand>


                        }
                        <NavItem href="/order" text={t('header.orderShip')} />
                        <NavItem href="/contacts" text={t('header.contacts')} />

                        {/* {!mobWidth &&
                            <NavDropdown title={t(`header.${i18n.language}`)} style={{margin: 'auto'}} id="navbarScrollingDropdown">
                                <Button style={{ color: "rgba(0,0,0,.5)", margin: 0 }} onClick={() => i18n.changeLanguage('ru')} variant="link">{t('header.ru')}</Button>
                                <Button style={{ color: "rgba(0,0,0,.5)", padding: 0 }} onClick={() => i18n.changeLanguage('en')} variant="link">{t('header.en')}</Button>
                            </NavDropdown>
                        } */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

// <nav className="Header navbar navbar-expand-lg navbar-light justify-content-end" >

// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
//     aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
// </button>
// <div className="brand-centered">
//     <Link href={mainPage} className="navbar-brand">
//         <img id="shortLogo" src={shortLogo} alt="small logo" />
//     </Link>
// </div>
// <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav menu-btn navbar-left">
//         <NavItem href="/about" text={t('header.about')} />
//         <NavItem href="/shop" text={t('header.shop')} />
//     </div>
//     <div className="navbar-nav menu-btn navbar-right ml-auto">
//         <NavItem href="/order" text={t('header.orderShip')} />
//         <NavItem href="/contacts" text={t('header.contacts')} />
//     </div>
// </div>


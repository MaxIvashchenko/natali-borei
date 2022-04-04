import { useTranslation } from "react-i18next";
import shortLogo from 'assets/images/shortLogo.png'
import Image from 'next/image'
import { Button, NavDropdown, Navbar, Nav } from 'react-bootstrap';
import NavItem from './NavItem'
import useWindowSize from "hooks/useWindowSize"
import { LanguageDropdown } from 'components/LanguageDropdown'

export default function Header({ mainPage }) {
  const { t } = useTranslation('common');
  const isMobile = useWindowSize();

  return (
    <Navbar collapseOnSelect bg="light" expand="lg" className={`Header justify-content-end`}>
      {isMobile ?
        (
          <>
            <LanguageDropdown />
            <div className="brand-centered">
              <Navbar.Brand href={mainPage}>
                <Image width={70} height={70} className="shortLogo" src={shortLogo} alt="small logo" />

              </Navbar.Brand>
            </div>
          </>
        )
        : <div />

      }
      <Navbar.Toggle aria-controls="navbarScroll" className="m-2" />
      <Navbar.Collapse id="navbarScroll" className="py-4 px-xs-2" style={{ textAlign: "center", }}>
        <Nav
          className=" my-2 my-lg-0"
          style={{ margin: '0 auto' }}
        >
          <NavItem href="/about" text={t('header.about')} />
          <NavItem href="/shop" text={t('header.shop')} />
          <NavItem href="/collections" text={t('header.collections')} />
          <div style={{ width: 200 }} />

          {!isMobile ?
            <Navbar.Brand className="brand-centered" href={mainPage}>
              <Image width={80} height={70} className="shortLogo" src={shortLogo} alt="small logo" />
            </Navbar.Brand>
            : <div />
          }
          <NavItem href="/order" text={t('header.orderShip')} />
          <NavItem href="/contacts" text={t('header.contacts')} />

          {!isMobile ?
            <Nav.Link>
              <LanguageDropdown />
            </Nav.Link>
            : <div />
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
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


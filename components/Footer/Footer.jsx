import { useTranslation } from "react-i18next";
import shortLogo from 'assets/images/shortLogo.png'
import Image from 'next/image'
import Link from 'next/link'

import { email, adress, phone } from "data/contacts";

const links = {
    facebook: "https://www.facebook.com/Nataly.la.perla/",
    instagram: "https://www.instagram.com/accounts/login/?next=%2Fbeads__line%2F&source=follow",
}

export default function Footer({ mainPage }) {
    const { t } = useTranslation('common');

    return (
        <footer className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 footerContacts">
                        <h3>{t('footer.contactUs')}</h3>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <p>{t(adress)}</p>
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                <p>{phone}</p>
                            </li>
                            <li>
                                <i className="far fa-envelope-open"></i>
                                <span>{email}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 footerLogo">
                        <Image src={shortLogo} alt="small-logo" />
                    </div>
                    <div className="col-12 col-md-4 footerNavigation">
                        <h3>{t('footer.usefulLinks')}</h3>
                        <Link href={mainPage}>{t('header.home')}</Link>
                        <Link href='/about'>{t('header.about')}</Link>
                        <Link href='/shop'>{t('header.shop')}</Link>
                        <Link href='/order'>{t('header.orderShip')}</Link>
                        <Link href='/contacts'>{t('header.contacts')}</Link>
                    </div>
                </div>
            </div>

            <section className="container">
                <div className="row">
                    <div className="col-12 socialIcons">
                        <a href={links.facebook}><i className="fab fa-facebook facebook-bg"></i></a>
                        <a href={links.instagram}><i className="fab fa-instagram instagram-bg"></i></a>
                    </div>
                    <div className="col-12 mb-1">
                        <p>Natali Borei © 2015 - 2022</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}

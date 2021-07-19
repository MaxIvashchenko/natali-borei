import React from 'react'
import Link from 'next/link'

import { useTranslation } from "react-i18next";
import Banner from '../Banner/Banner';
import { Animated } from 'react-animated-css'
import bracelet from '../../images/main/bracelets_title.png'
import necklace from '../../images/main/necklace_title.png'
import pendant from '../../images/main/pendant_title.png'
import bag from '../../images/main/bags_title.png'
import brooch from '../../images/main/brooch_title.png'
import lavBrooch from '../../images/main/lavBrooch_title.png'
import ring from '../../images/main/rings_title.png'
import stick from '../../images/stick.png'
import Image from 'next/image'

const categories = [
    { name: 'brooch', sizeClass: 'col-md-6', imgSrc: brooch, text: 'Brooch', width: 46 },
    { name: 'bracelets', sizeClass: 'col-md-6', imgSrc: bracelet, text: 'Bracelets', width: 60 },
    { name: 'rings', sizeClass: 'col-md-3', imgSrc: ring, text: 'Rings', width: 60 },
    { name: 'lavBrooch', sizeClass: 'col-md-6', imgSrc: lavBrooch, text: 'Lavalierbrooch', width: 100 },
    { name: 'bags', sizeClass: 'col-md-3', imgSrc: bag, text: 'Bags', width: 100 },
    { name: 'pendant', sizeClass: 'col-md-6', imgSrc: pendant, text: 'Pendant', width: 100 },
    { name: 'necklace', sizeClass: 'col-md-6', imgSrc: necklace, text: 'Necklace', width: 100 },
]

function Home() {
    const [t] = useTranslation('common');

    return (
        <Animated className="Home">
            <Banner />
            <div className="container">
                <div className="row categoryShop">

                    {categories.map((category, i) => {
                        const { text, sizeClass, name, imgSrc } = category;

                        return (
                            <Link key={i} href={`/shop/${text.toLowerCase()}`} passHref>
                                <div key={i} className={'col-12 ' + sizeClass + " cover"}>
                                    <h3>{t(`categories.${name}`)}</h3>
                                    <div className="stick1">
                                        <Image src={stick} alt='srick' />
                                    </div>
                                    <div className="stick2">
                                        <Image src={stick} alt='srick' />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}

                </div>
            </div>

        </Animated>
    )
}

export default Home
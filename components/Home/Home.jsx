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
import useWindowSize from "../../hooks/useWindowSize"

const categories = [
    { name: 'brooch', sizeClass: 'col-md-7', imgSrc: brooch, text: 'Brooch' },
    { name: 'bracelets', sizeClass: 'col-md-5', imgSrc: bracelet, text: 'Bracelets' },
    { name: 'rings', sizeClass: 'col-md-3', imgSrc: ring, text: 'Rings' },
    { name: 'lavBrooch', sizeClass: 'col-md-6', imgSrc: lavBrooch, text: 'Lavalierbrooch' },
    { name: 'bags', sizeClass: 'col-md-3', imgSrc: bag, text: 'Bags' },
    { name: 'pendant', sizeClass: 'col-md-5', imgSrc: pendant, text: 'Pendant' },
    { name: 'necklace', sizeClass: 'col-md-7', imgSrc: necklace, text: 'Necklace' },
]

function Home() {
    const [t] = useTranslation('common');

    const { width } = useWindowSize();
    const imageWidth = Math.round(width / 100 * 46);
    // const imageWidth = dimensions.width;
    console.log(imageWidth)
    return (
        <Animated className="Home">
            <Banner />
            <div className="container">
                <div className="row categoryShop">

                    {categories.map((category, i) => {
                        const { text, sizeClass, name, imgSrc } = category;

                        return (
                            <Link key={i}  href={`/shop/${text.toLowerCase()}`} className={'col-12 ' + sizeClass}>
                                <div className={name}>


                                    <Image
                                        // resizeMode={'cover'}
                                        width={imageWidth}
                                        height={100}
                                        // style={{width: imageWidth}}
                                        // layout="fill" 
                                        className="cover" src={imgSrc} alt={name + '_title'} />
                                    <h3>{t(`categories.${name}`)}</h3>
                                    <Image width={100} src={stick} alt='srick' className="stick1" />
                                    <Image width={100} src={stick} alt='stick' className="stick2" />
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
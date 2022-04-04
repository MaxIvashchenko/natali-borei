import React from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';

import { setTitle } from 'store/title/action'
import { useTranslation } from "react-i18next";
import { Banner } from 'components/Banner';
import { Animated } from 'react-animated-css';
import bracelet from 'assets/images/main/bracelets_title.png'
import necklace from 'assets/images/main/necklace_title.png'
import pendant from 'assets/images/main/pendant_title.png'
import bag from 'assets/images/main/bags_title.png'
import brooch from 'assets/images/main/brooch_title.png'
import lavBrooch from 'assets/images/main/lavBrooch_title.png'
import ring from 'assets/images/main/rings_title.png'
import stick from 'assets/images/stick.png'
import Image from 'next/image';
import titleToUrl from "helper";
import InfoLine from './InfoLine';

const categories = [
    { name: 'brooch', sizeClass: 'col-md-6', imgSrc: brooch, text: 'Brooch', width: 46 },
    { name: 'bracelets', sizeClass: 'col-md-6', imgSrc: bracelet, text: 'Bracelets', width: 60 },
    { name: 'rings', sizeClass: 'col-md-3', imgSrc: ring, text: 'Rings', width: 60 },
    { name: 'lavBrooch', sizeClass: 'col-md-6', imgSrc: lavBrooch, text: 'Lavalier brooch', width: 100 },
    { name: 'bags', sizeClass: 'col-md-3', imgSrc: bag, text: 'Bags', width: 100 },
    { name: 'pendant', sizeClass: 'col-md-6', imgSrc: pendant, text: 'Pendant', width: 100 },
    { name: 'necklace', sizeClass: 'col-md-6', imgSrc: necklace, text: 'Necklace', width: 100 },
]

function Home() {
    const [t] = useTranslation('common');
    const router = useRouter()
    const dispatch = useDispatch();

    const handleClick = (value) => {
        const title = titleToUrl(value);
        dispatch(setTitle(title));
        router.push('shop');
    };

    return (
        <Animated className="Home">
            <Banner />
            <InfoLine />
            <div className="container">
                <div className="row categoryShop">

                    {categories.map((category, i) => {
                        const { text, sizeClass, name, imgSrc } = category;

                        return (
                            <button onClick={() => handleClick(text)} key={i} className={'col-12 ' + sizeClass + " cover"}>
                                <h3>{t(`categories.${name}`)}</h3>
                                <div className="stick1">
                                    <Image src={stick} alt='srick' />
                                </div>
                                <div className="stick2">
                                    <Image src={stick} alt='srick' />
                                </div>
                            </button>
                        )
                    })}

                </div>
            </div>

        </Animated>
    )
};

export default Home;

import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import { Animated } from 'react-animated-css'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Image from 'next/image';
import backImg from '../../assets/images/back.svg'
import FewItems from './ShowItem/FewItems'
export default function Item() {
    const { t, i18n } = useTranslation('common');
    const router = useRouter();
    const { id } = router.query;
    const lang = i18n.language;
    const [numOfImg, setnumOfImg] = useState(0)
    const item = useSelector(({ currentItem }) => currentItem)



    return (
        <Animated animationInDuration={1000} animationIn="fadeIn" className="ShowItem">
            <div className="container-fluid">
                <button className="backImg" onClick={()=>router.back()}>
                    <Image src={backImg} alt="back-icon" />
                </button>
                {item.variants ? <FewItems numOfImg={numOfImg} setnumOfImg={setnumOfImg} item={item} /> :
                    <>
                        <div className="row">
                            <div className="col-12 col-md-6 textBlock">

                                <h2>{item[lang].name}</h2>
                                <p className='id'>#{item.id}</p>
                                <hr className="line" />

                                <h4>{t("shop.showItem.price")}</h4>
                                <div className={`priceBlock ${item.available}`}>
                                    <p>{item.price}€</p>
                                    <p>{t(`shop.filter.${item.available}`)}</p>
                                </div>
                                <hr className="line" />

                                <h4>{t("shop.showItem.description")}</h4>
                                <h5>{item[lang].description}</h5>
                                <hr className="line" />

                                <h4>{t("shop.showItem.material")}</h4>
                                <h5>{item[lang].material}</h5>
                                <hr className="line" />

                                <h4>{t("shop.showItem.measurements")}</h4>
                                <h5>{item.dimensions} {t(`shop.filter.dimension`)}</h5>

                            </div>

                            <div className="col-12 col-md-6 imageBlock">
                                <Image
                                    src={require('../../assets/images/' + item.images[numOfImg] + '')}
                                    alt={item.name + "-photo-" + 1}
                                />
                                <div className="imageRow">
                                    {item.images.map((image, i) => {

                                        return (
                                            <button onClick={() => setnumOfImg(i)} key={"imageInROw " + i}>
                                                <Image className={i === numOfImg ? "activeImg" : "none"}
                                                    src={require('../../assets/images/' + image + '')}
                                                    alt={item.en.name + "-photo-" + i}
                                                />
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </Animated>
    )
}

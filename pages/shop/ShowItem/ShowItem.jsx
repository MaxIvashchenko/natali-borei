import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import { Animated } from 'react-animated-css'

import { useHistory } from 'react-router-dom'
import backImg from '../../../images/back.svg'
import FewItems from './FewItems'
import NotFound from '../../Common/NotFound'

export default function Item(props) {
    const { t, i18n } = useTranslation('common');
    const lang = i18n.language;
    const history = useHistory();
    const [numOfImg, setnumOfImg] = useState(0)
    if (!props.location.state) return <NotFound />
    const item = props.location.state.item

    return (
        <Animated animationInDuration={1000} animationIn="fadeIn" className="ShowItem">
            <div className="container-fluid">
                <button className="backImg" onClick={()=>history.goBack()}>
                    <img src={backImg} alt="back-icon" />
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
                                <img
                                    src={require('../../../images/' + item.images[numOfImg] + '')}
                                    alt={item.name + "-photo-" + 1}
                                />
                                <div className="imageRow">
                                    {item.images.map((image, i) => {

                                        return (
                                            <button onClick={() => setnumOfImg(i)} key={"imageInROw " + i}>
                                                <img className={i === numOfImg ? "activeImg" : "none"}
                                                    src={require('../../../images/' + image + '')}
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

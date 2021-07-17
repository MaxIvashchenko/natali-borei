import React, { useState } from 'react'
import { useTranslation } from "react-i18next";

export default function FewItems({ numOfImg, setnumOfImg, item }) {
    const { t, i18n } = useTranslation('common');
    const lang = i18n.language;
    const [activeItem, setactiveItem] = useState(0)

    const colors = item.variants.map((variant, i) => {
        const changeState = (i) => {
            setactiveItem(i)
            setnumOfImg(0)
        }
        return (
            <button onClick={() => changeState(i)} key={variant.color + '-' + i} className={activeItem === i ? "activeVariant " + variant.color : variant.color}></button>
        )
    })


    return (
        <>


            <div className="row">
                <div className="col-12 col-md-6 textBlock">

                    <h2>{item[lang].name}</h2>
                    <p className='id'>#{item.variants[activeItem].id}</p>
                    <hr className="line" />


                    <h4>{t("shop.showItem.chooseColor")}</h4>
                    <div className="variants">
                        {colors}
                    </div>
                    <hr className="line" />

                    <h4>{t("shop.showItem.price")}</h4>
                    <div className={`priceBlock ${item.variants[activeItem].available}`}>
                        <p>{item.variants[activeItem].price}€</p>
                        <p> {t(`shop.filter.${item.variants[activeItem].available}`)}</p>
                    </div>
                    <hr className="line" />

                    <h4>{t("shop.showItem.description")}</h4>
                    <h5>{item[lang].description}</h5>
                    <hr className="line" />

                    <h4>{t("shop.showItem.material")}</h4>
                    <h5>{item[lang].material}</h5>
                    <hr className="line" />

                    <h4>{t("shop.showItem.measurements")}</h4>
                    <h5>{item.variants[activeItem].dimensions} {t(`shop.filter.dimension`)}</h5>

                </div>



                <div className="col-12 col-md-6 imageBlock">
                    <img
                        src={require('../../../images/' + item.variants[activeItem].images[numOfImg] + '')}
                        alt={item.en.name + "-photo-" + 1}
                    />
                    <div className="imageRow">
                        {item.variants[activeItem].images.map((image, i) => {
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
    )
}

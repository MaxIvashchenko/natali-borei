import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import Image from 'next/image';

function FewItems({ numOfImg, setnumOfImg, item }) {
  const { t, i18n } = useTranslation('common');
  const lang = i18n.language;
  const [activeItem, setactiveItem] = useState(0);

  const pickColorHandler = (index) => () => {
    setactiveItem(index);
    setnumOfImg(0);
  };

  const colors = item.variants.map(({ color }, i) => (
    <button
      onClick={pickColorHandler(i)}
      key={color + '-' + i}
      className={activeItem === i ? "activeVariant " + color : color}
    />
  ));

  return (
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
        <Image
          src={require('assets/images/' + item.variants[activeItem].images[numOfImg] + '')}
          alt={item.en.name + "-photo-" + 1}
        />
        <div className="imageRow">
          {item.variants[activeItem].images.map((image, i) => (
            <button onClick={() => setnumOfImg(i)} key={"imageInROw " + i}>
              <Image className={i === numOfImg ? "activeImg" : "none"}
                src={require('assets/images/' + image + '')}
                alt={item.en.name + "-photo-" + i}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

FewItems.propTypes = {
  numOfImg: PropTypes.number,
  setnumOfImg: PropTypes.func,
  item: PropTypes.object
};

export default FewItems;
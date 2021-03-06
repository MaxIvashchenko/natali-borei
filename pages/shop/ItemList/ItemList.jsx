import React from 'react'
import { useTranslation } from "react-i18next";
import CardImage from './CardImage';
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { setItem } from 'store/currentItem/action'

export default function ItemList({ items }) {
  const { t, i18n } = useTranslation('common');
  const dispatch = useDispatch();
  const lang = i18n.language;

  const arrayMin = (arr) => arr.reduce((p, v) => (p.price < v.price ? p : v));

  return items.map(function (item, i) {
    const path = `/shop/${item.id}`

    const showItem = () => {
      const price = item.variants && arrayMin(item.variants).price
      const colors = item.variants && item.variants.map((variant, i) => <div key={variant.color + '-' + i} className={variant.color}></div>)
      const isAvailable = item.variants && item.variants.some(a => a.available === 'available')
      const status = isAvailable ? "available" : "sold";

      return (
        <>
          <div className="col-12 ">
            <CardImage images={item.variants ? item.mainImage : item.images} name={item[lang].name} />
            <h1 className="item-name">{item[lang].name}</h1>
            <hr className="line" />
            {item.variants ? <div className="variants">
              {colors}
            </div> : null}
          </div>

          <ul className="col-12 priceStatus">
            {item.variants ?
              <>
                <li className={`item-status ${status}`}>{t(`shop.filter.${status}`)}</li>
                < li className="item-price  ">{t(`shop.filter.from`)} {price} €</li>
              </>
              :
              <>
                <li className={"item-status   " + item.available}>{t(`shop.filter.${item.available}`)}</li>
                <li className="item-price  ">{item.price} €</li>
              </>
            }
          </ul>
        </>
      );
    };

    return (
      <Link href={path}
        passHref
        key={i}>
        <div onClick={() => dispatch(setItem(item))} className="items container col-6 col-sm-6 col-lg-4">
          <div className="item-card">
            <div className="content row">
              {showItem()}
            </div>
          </div>

        </div>
      </Link>
    )
  })
}
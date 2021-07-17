import React from 'react'
import { useTranslation } from "react-i18next";
import { Animated } from 'react-animated-css'


export default function FilterSettings({ filterShowAvailable, filterSortPrice, selectedAvailable, selectedPrice }) {
    const { t } = useTranslation('common');

    const filterSettings = ["all", "in stock"]
    const priceFil = ["price ↓", "price ↑"]
    const showPriceFil = (text) => text ==="price ↓" ? "priceDown" : "priceUp";
    const selectedNav = (name, selected) =>  name === selected ? "filter-selected   nav-link" : "unselected nav-link "

    const filterAvailableButtons = (
        <>
            {filterSettings.map((buttonName, i) =>
                <li className="nav-item" key={i + " " + buttonName}>
                    <button
                        onClick={() => filterShowAvailable(buttonName)}
                        className={selectedNav(buttonName, selectedAvailable)}
                    >
                        {t(`shop.filter.${buttonName.replace(/\s/g, '')}`)}
                    </button>
                </li>
            )}
        </>
    )

    const filterByPrice = (
        <>
            {priceFil.map((buttonName, i) =>
                <li className="nav-item" key={i + " " + buttonName}>
                    <button
                        className={selectedNav(buttonName, selectedPrice)}
                        onClick={() => filterSortPrice(buttonName)}
                    >
                        {t(`shop.filter.${showPriceFil(buttonName)}`)}
                    </button>
                </li>
            )}
        </>
    )


    return (
        <>
            <Animated isVisible={true} animationIn="bounceInRight" animationOut="bounceInLeft" >
                <div className="row settings-filter">
                    <ul className="nav col-12 justify-content-center">
                        {filterAvailableButtons}
                        {filterByPrice}
                    </ul>
                </div>
            </Animated>
        </>
    )
}
import React from 'react'
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { Animated } from 'react-animated-css'
import titleToUrl from "../../../helper/helper"

export default function ButtonCategory({ filter, i, showText }) {
    const { title } = useParams();
    const { t } = useTranslation('common');

    return (
        <Link
            className={titleToUrl(filter) === title ? "filter-selected category-name" : "unselected category-name"}
            to={`/shop/${titleToUrl(filter)}`}>
            <Animated animationIn="bounceInRight" animationOut="fadeOut" >
                {t(`categories.${showText(filter)}`)}
            </Animated>
        </Link>
    )
}

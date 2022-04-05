import React from 'react'
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
// import { Link, useParams } from "react-router-dom";
// import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from 'store/title/action';
import { Animated } from 'react-animated-css';
import titleToUrl from "helper";

function ButtonCategory({ filter, showText }) {
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const title = useSelector(({ title }) => title);

  const handleClick = (text) => {
    let title = titleToUrl(text);
    dispatch(setTitle(title));
  };

  return (
    <div
      onClick={() => handleClick(filter)}
      className={titleToUrl(filter) === title ? "filter-selected category-name" : "unselected category-name"}
    >
      <Animated animationIn="bounceInRight" animationOut="fadeOut" >
        {t(`categories.${showText(filter)}`)}
      </Animated>
    </div>
  );
}

ButtonCategory.propTypes = {
  filter: PropTypes.string,
  showText: PropTypes.func
};

export default ButtonCategory;
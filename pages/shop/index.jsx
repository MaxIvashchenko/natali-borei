import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from "react-i18next";
import { Animated } from 'react-animated-css'

import Toolbar from './Toolbar/Toolbar';
import ItemList from './ItemList/ItemList';
import FilterSettings from './Toolbar/FilterSettings';
import titleToUrl from "helper";

import items from 'data'

export default function Shop() {
    const [selectedAvailable, setSelectedAvailable] = useState('all');
    const [selectedPrice, setSelectedPrice] = useState('');
    const title = useSelector(({ title }) => title)
    const { t } = useTranslation('common');

    const selected = title;
    // const isExistCategory = titleToUrl(title) === selected;

    const sortByPrice = (a, b) => {
        switch (selectedPrice) {
            case 'price ↓':
                return b.price - a.price;
            case 'price ↑':
                return a.price - b.price;
            default:
                return
        }
    }
    const filterByAvailability = (item) => selectedAvailable === 'all' ? item : item.available === 'available';
    const filterBySelection = ({ title }) => titleToUrl(title) === selected;

    const showItems = items
        .filter(filterBySelection)
        .filter(filterByAvailability)
        .sort(sortByPrice);

    const renderItems = () => {
        if (showItems.length < 1) {
            return (
                <div className="col-12 chooseCategory">
                    <p>{t('shop.filter.outOfStock')}</p>
                </div>
            );
        };

        return <ItemList items={showItems} />;
    };

    return (
        <>
            <section className="container-fluid Shop">
                <div className="row">
                    <aside className="col-12 col-md-3 nav-shop">
                        <Toolbar />
                    </aside>

                    <div className="col-12 col-md-9">
                        {items.length > 1 ?
                            <FilterSettings
                                filterShowAvailable={setSelectedAvailable}
                                filterSortPrice={setSelectedPrice}
                                selectedAvailable={selectedAvailable}
                                selectedPrice={selectedPrice}
                            />
                            :
                            <Animated className="noFilter" animationIn="bounceInRight" animationOut="fadeOut" />
                        }
                        <div className="row">
                            {renderItems()}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


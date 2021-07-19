import React from 'react'
import ButtonCategory from './ButtonCategory';

const filters = ["Necklace", "Lavalier brooch", "Pendant", "Brooch", "Rings", "Bracelets", "Bags"];

function Toolbar() {
    const showText = (text) => text === "Lavalier brooch" ? "lavBrooch" : text.toLowerCase();


    return filters.map((filter, i) =>
        <React.Fragment key={filter + ' ' + i}>
            <ButtonCategory filter={filter} showText={showText} />
        </React.Fragment>
    )
};

export default Toolbar;
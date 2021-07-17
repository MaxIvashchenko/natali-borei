import React from 'react'
import ButtonCategory from './ButtonCategory';

function Toolbar({ filters }) {
    const showText = (text) => text === "Lavalier brooch" ? "lavBrooch" : text.toLowerCase();


    return filters.map((filter, i) =>
        <React.Fragment key={filter + ' ' + i}>
            <ButtonCategory filter={filter} i={i} showText={showText} />
        </React.Fragment>
    )
};

export default Toolbar;
import React from 'react'
import Image from 'next/image';

import fast from 'assets/images/icons/fast.svg';
import diamond from 'assets/images/icons/diamond.svg';
import hand from 'assets/images/icons/hand.svg';

const infoText = [
    { text: 'Worldwide shipping', icon: fast },
    { text: 'Unique designed', icon: diamond },
    { text: 'Handmade only', icon: hand }
]

export default function InfoLine() {
    return (
        <div className="InfoLine row">
            {infoText.map(({ text, icon }, i) => (
                <div key={`InfoLine-${i}`} className="col-4">
                    <Image width={20} height={20} src={icon} alt="description icon"/>
                    <p>{text.toUpperCase()}</p>
                </div>
            ))
            }

        </div>
    )
};

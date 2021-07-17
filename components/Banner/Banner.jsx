import React from 'react'
import bigLogo from './Sait_NataliBorei.png'
import Ztext from 'react-ztext'
import Image from 'next/image'



export default function Banner() {
    return (
        <div className="bigScr">
            <Ztext
                depth='1rem'
                direction='both'
                event='pointer'
                eventRotation='10deg'
                fade={false}
                layers={1}
                perspective='500px'
            >
                <Image src={bigLogo} alt="big logo" />
            </Ztext>
            <p>Beaded Jewelry & Accessories</p>
        </div>
    )
}

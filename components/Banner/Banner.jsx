import Ztext from 'react-ztext'
import Image from 'next/image'
import bigLogo from './Sait_NataliBorei.png'
import useWindowSize from "../../hooks/useWindowSize"

export default function Banner() {
    const { width } = useWindowSize();
    const mobWidth = width < 992;

    return (
        <div className="Banner">
            {mobWidth ?
                <Image src={bigLogo} alt="big logo" />
                : <Ztext
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
            }
            <p>Beaded Jewelry & Accessories</p>
        </div>
    )
}

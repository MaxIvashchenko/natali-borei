import { useEffect } from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';





export default function Layout({ children }) {
    const mainPage = '/'

    return (
        <div className='layout'>
            <Header mainPage={mainPage} />
            {children}
            {/* <Footer mainPage={mainPage} /> */}
        </div>
    );
}


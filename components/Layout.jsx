import { Header } from './Header';
import { Footer } from './Footer';

const mainPage = '/'

const Layout = ({ children }) => (
    <div className='layout'>
        <Header mainPage={mainPage} />
        {children}
        <Footer mainPage={mainPage} />
    </div>
);

export default Layout;
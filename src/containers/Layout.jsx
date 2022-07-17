import React from 'react';

import {useLocation} from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/_vars.css';
import '../styles/Layout.css';

const Layout = ({children}) => {
    const {pathname} = useLocation();

    const setOnTop = path => {
        window.scrollTo(0,0);
    }

    return (
        <div className='layout'>
            {setOnTop(pathname)}
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;
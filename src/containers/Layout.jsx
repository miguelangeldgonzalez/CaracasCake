import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/_vars.css';
import '../styles/Layout.css';

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;
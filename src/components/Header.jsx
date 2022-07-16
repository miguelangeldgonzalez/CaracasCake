import React from 'react';

import {Link, useLocation} from 'react-router-dom';

import CaracasCakeLogo from '../assets/caracas_cake_logo.png';

import '../styles/Header.css';

const Header = () => {
    const {pathname} = useLocation();
    console.log(pathname);

    return (
        <header>
            <Link className='header__main-icon' to='/'>
                <img src={CaracasCakeLogo} alt='logo de caracas cake' />
            </Link>
            <nav className='header__nav'>
                <ul>
                    <li className={pathname == '/encargo' ? 'active' : ''}>
                        <Link to='/encargo'>Encargo</Link>
                    </li>
                    <li className={pathname == '/contactanos' ? 'active' : ''}>
                        <Link to='/contactanos'>Contáctanos</Link>
                    </li>
                    <li className={pathname == '/productos' ? 'active' : ''}>
                        <Link to='/'>Productos</Link>
                    </li>
                </ul>
            </nav>
        </header> 
    )
}

export default Header;
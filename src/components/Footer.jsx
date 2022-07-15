import React from 'react';
import { Link } from 'react-router-dom';

import Instagram from '../assets/icons/instagram_icon.svg';
import WhatsApp from '../assets/icons/whatsapp_icon.svg';

import CaracasCake from '../assets/caracas_cake_logo.svg';

import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer__upper'>
                <nav>
                    <ul>
                        <li>
                            <Link to='/encargo'>Encargo</Link>
                        </li>
                        <li>
                            <Link to='/contactanos'>Contáctanos</Link>
                        </li>
                        <li>
                            <Link to='/productos'>Productos</Link>
                        </li>
                    </ul>
                </nav>

                <div className="footer__upper__social-media">
                    <a href="https://www.instagram.com/caracascake" target='_blank' className='social-media___button'>
                        <img src={Instagram} />
                    </a>
                    <a href="https://wa.me/+584242093842" target='_blank' className='social-media___button'>
                        <img src={WhatsApp} />
                    </a>
                </div>

                <Link to='/'>
                    <img src={CaracasCake} alt="" />
                </Link>
            </div>
            <hr />

            <div className="footer__lower">
                <div className="right">
                    <p>Desarrollo</p>
                    <a href='https://miguelangeldgonzalez.github.io'>
                        <p>Miguelángel Domínguez</p>
                    </a>
                </div>
                <div className="left">
                    <p>Diseño</p>
                    <a href="">
                        <p>Dani Rodriguez</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
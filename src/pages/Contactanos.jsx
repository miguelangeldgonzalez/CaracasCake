import React from 'react';

import StrangerThings from '../assets/img/caracas_cake_happy_birthday_cake.png';

import LocationIcon from '../assets/icons/location_icon.png';
import Instagram from '../assets/icons/instagram_icon.svg';
import WhatsApp from '../assets/icons/whatsapp_icon.svg';
import EmailIcon from '../assets/icons/email_icon.png';
import CallIcon from '../assets/icons/call_icon.png';

import '../styles/Contactanos.css';

const Contact = () => {
    return (
        <div className='contact__container'>
            <div className='contact__left'>
                <img src={StrangerThings}/>

                <div className='contact__information'>
                    <div>
                        <img src={CallIcon}/>
                        <span><a href='tel:+584242093842' target='_blank'>+58 424-2093842</a></span>
                    </div>
                    <div>
                        <img src={EmailIcon}/>
                        <span><a href='mailto:ventas@caracascake.com' target='_blank'>ventas@caracascake.com</a></span>
                    </div>
                    <div>
                        <img src={LocationIcon}/>
                        <span>Envios en Caracas</span>
                    </div>
                </div>
            </div>
            <div className='contact__right'>
                <h1>Contáctanos</h1>

                <h2>Puedes comunicarte por estos medios si tienes alguna duda</h2>

                <div className="contact__social-media">
                    <a href="https://www.instagram.com/caracascake" target='_blank' className='social-media___button'>
                        <img src={Instagram} />
                    </a>
                    <a href="https://wa.me/+584242093842" target='_blank' className='social-media___button'>
                        <img src={WhatsApp} />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Contact;
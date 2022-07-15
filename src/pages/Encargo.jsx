import React from 'react';

import '../styles/Encargo.css';

const Encargo = () => {
    const handleSubmit = e => {
        e.preventDefault();
        alert('Gracias por solicitar nuestros servicios este atento a su whatsapp para enviarle la cotización de su encargo.')
    }
    return (
        <form className='order__container' onSubmit={e => handleSubmit(e)}>
                <div className="order__left">
                    <h1>Encarga tu Torta</h1>

                    <label>Temática</label>
                    <textarea placeholder='¿Cuál es la temática para la torta?' required/>

                    <label>Fecha de Entraga</label>
                    <input type="date" required/>
                    
                    <label>Porciones</label>
                    <input type='number' placeholder='1 - 32' min='1' max='32' required/>
                </div>

                <div className="order__right">
                    <h2>Información del cliente</h2>

                    <label>Nombre</label>
                    <input type="text" required/>

                    <label>Email</label>
                    <input type="text" required/>

                    <label>Número</label>
                    <div className='order__right__number'>
                        <span>+58</span>
                        <input type="number" placeholder='4241234455' required/>
                    </div>

                    <input type='submit' value='Solicitar Cotización' className='button'/>
                </div>
        </form>
    )
}

export default Encargo;
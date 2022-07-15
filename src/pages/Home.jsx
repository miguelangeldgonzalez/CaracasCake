import React from 'react';
import { Link } from 'react-router-dom';

import ProductCard from '../components/ProductCard';
import CaracasCakeLogo from '../assets/caracas_cake_logo.png';

import CakeDiaDelIngeniero from '../assets/img/caracas_cake_dia_del_ingeniero.jpg';
import CakeCoffeeMachine from '../assets/img/caracas_cake_maquina_de_cafe.jpg';
import CakeSushi from '../assets/img/caracas_cake_sushi_cake.jpg';

import '../styles/Home.css';

const Home = () => {
    return (
        <div className='home__container'>
            <div className='banner__container'>
                <div className='banner__text'>
                    <h1>Caracas Cake</h1>
                    <h2>Repostería artística</h2>
                </div>
            </div>

            <div className='about__container'>
                <div className="about__background"></div>
                <h2>¿Qué es Caracas Cake?</h2>

                <div className='about__content'>
                    <img src={CaracasCakeLogo} alt='logo de caracas cake' />
                    <p>Caracas cake surgió de la necesidad de querer expresar mi amor y pasión por el arte de la repostería en una empresa que pudiera brindarle al cliente la posibilidad de ver plasmadas sus ideas en obras de arte hechas en azúcar, que marquen una diferencia, estén en tendencia, tengan una presentación impecable además de un delicioso sabor.</p>
                </div>

                <button><Link to='/contactanos'>¡Contáctanos!</Link></button>
            </div>

            <div className='products__container'>
                <h2>Tu torta para cada ocación</h2>

                <div className='products__cards'>
                    <ProductCard img={CakeSushi}>
                        <h3>Título</h3>
                        <p>Descripción</p>
                    </ProductCard>
                    <ProductCard img={CakeDiaDelIngeniero}>
                        <h3>Título</h3>
                        <p>Descripción</p>
                    </ProductCard>
                    <ProductCard img={CakeCoffeeMachine}>
                        <h3>Título</h3>
                        <p>Descripción</p>
                    </ProductCard>
                </div>
                <p>Cada torta es especial para cada cliente, de esta manera creemos en que cada cliente pueda plasmar su idea en nuestras obras</p>

                <button><Link to='/encargo'>¡Encarga tu Torta!</Link></button>
            </div>
        </div>
    )
}

export default Home;
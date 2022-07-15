import React from 'react';

import '../styles/ProductCard.css';

const ProductCard = (props) => {
    return (
        <div className='product-card__container'>
            <img src={props.img} alt={props.alt || ''} />
            <div className='product-card__content'>
                {props.children}
            </div>
        </div>
    )
}

export default ProductCard;
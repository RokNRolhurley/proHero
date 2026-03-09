import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, handelAddToCart}) => {
    // console.log(bottle);
    const {image, brand, capacity_ml, material, price_usd } = bottle;

    return (
        <div className='card'>
        <h4>{bottle.name}</h4>    
        <img src={image} alt={bottle.name} className="image"></img>
        <p>Brang: {brand}</p>
        <p>Capacity: {capacity_ml}</p>
        <p>Material: {material}</p>
        <p>Price: ${price_usd}</p>
        <button onClick={() => {handelAddToCart(bottle)}}>Buy Now</button>
        
        </div>
    );
};

export default Bottle;
import React, { use, useState } from 'react';
import Bottle from './bottle';
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([])
    
    const bottles = use(bottlesPromise);
    // console.log(bottles);

    const handelAddToCart = (bottle) => {
        // console.log('Bottle added to cart', bottle)
        const newCart = [...cart, bottle];
        setCart(newCart);

    }

    return (
        <div>
            <h3>Bottle: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>
                <div className='bottle-container'>
                    {
                    bottles.map(bottle =>
                     <Bottle 
                        key={bottle.id}
                        bottle={bottle}
                        handelAddToCart={handelAddToCart}>
                    </Bottle> )
            }
                </div>
        </div>
    );
};

export default Bottles;
import React, { use, useEffect, useState } from 'react';
import Bottle from './bottle';
import './Bottles.css'
import { addToStoreedCart, getStoreCart, removeFromCart } from '../utilities/localStorage';
import Cart from '../Cart/Cart';


const Bottles = ({bottlesPromise}) => {
    const [cart, setCart] = useState([])
    
    const bottles = use(bottlesPromise);

    //user effect
    useEffect( () => {
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles);
        const storedCart = [];

        for(const id of storedCartIds){
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id ===id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }

        setCart(storedCart);

    }, [bottles])


    // console.log(bottles);

    const handelAddToCart = (bottle) => {
        // console.log('Bottle added to cart', bottle)
        const newCart = [...cart, bottle];
        setCart(newCart);

        //save the product id in the storage
        addToStoreedCart(bottle.id); 
    }

    const handleRemoveFromCart = id =>{
        console.log('remove item from the cart', id)

        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromCart(id);
    }


    return (
        <div>
            <h3>Bottle: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
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
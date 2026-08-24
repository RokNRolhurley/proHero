import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {

    const [error, setError] =  useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form submitted');
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        // console.log({ name, price, quantity });

        //validation
        if(name.length === 0){
            setError('Provide a product name')
            return;
        }
        else if(price.length === 0){
            setError('Provide a product price')
            return;
        }
        else if(price < 0){
            setError('Provide a product price')
            return;
        }
        else if(quantity.length === 0){
            setError('Provide a product Quantity')
            return;
        }
        else if(quantity < 0){
            setError('Provide a product Quantity')
            return;
        }
        else{
            setError('')
            
        }

        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log('New Product:', newProduct);
       
        handleAddProduct(newProduct);
       
    }


    return (
        <div>

        <h3>Add a Product</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder="Product Name" />
                <br/>
                <input type="number" name='price' placeholder="Price" />
                <br/>
                <input type="number" name='quantity' placeholder="Quantity" />
                <br/>
                <button type="submit">Add Product</button>

            </form  >
            <p style={{color: 'Red'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;
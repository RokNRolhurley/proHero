import React, { useState } from 'react';

const ItemForm = ({addAnItem}) => {

    const [error, setError] = useState('');

    const handleItemSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        console.log(name, price, quantity);
    

        //Validation

        if(name.length === 0){
           setError('Enter a value for Name') 
           return;
        }
        else if(price.length === 0){
            setError('Price can not be blank')    
            return;
        }
        else if(price < .01){
            setError('Price cant be less then .01')
            return;
        }    
        
        else if(quantity.length === 0){
            setError('Quantity can not be 0')    
            return;
        }
        else if(quantity < 1){
            setError('Quantity can not be less then 1')
            return;
        }
        else {
            setError('')
            
        }
        
        const newItem = {name, price, quantity};

        addAnItem(newItem);
    
        
    }

    
    

    return (
        <div>
            <h3>Add an Item</h3>
            <form onSubmit={handleItemSubmit}>
                <input type='text' name='name' placeholder='Item Name'/>
                <br/>
                <input type='number' name='price' placeholder='Item Price'/>
                <br/>
                <input type='number' name='quantity' placeholder='Item Quantity'/>
                <br/>
                <button type='submit'>Add Item</button>
            </form>
            <p><small style={{color: 'Red'}}>{error}</small></p>

        </div>
    );
};

export default ItemForm;
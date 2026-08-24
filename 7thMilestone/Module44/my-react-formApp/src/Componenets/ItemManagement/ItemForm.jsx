import React from 'react';

const ItemForm = ({addAnItem}) => {

    const handleItemSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        console.log(name, price, quantity);
    
    
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
        </div>
    );
};

export default ItemForm;
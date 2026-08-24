import React, { useState } from 'react';
import ItemForm from './ItemForm';
import ItemTable from './ItemTable';

const ItemMangement = () => {

    const [items, setItems] = useState([]);

    const addAnItem = (newItem) =>{
       const newItems = [...items, newItem];
        setItems(newItems);
    }



    return (
        <div>
            <h3>Item Management</h3>
            <ItemForm addAnItem={addAnItem}></ItemForm>
            <ItemTable items={items}></ItemTable>
        </div>
    );
};

export default ItemMangement;
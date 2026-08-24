import React from 'react';

const ItemTable = ({items}) => {
   
   
    return (
        <div>
            <h3>Item Table: {items.length}</h3>

            <table className='table-container'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Item Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map  ((items, index) =>
                        <tr >
                            <td>{index +1}</td>
                            <td>{items.name}</td>
                            <td>{items.price}</td>
                            <td>{items.quantity}</td>
                            <td>{}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            
        </div>
    );
};

export default ItemTable;
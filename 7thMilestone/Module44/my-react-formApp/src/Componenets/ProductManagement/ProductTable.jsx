import React from 'react';
import './productTable.css'


const ProductTable = ({ products }) => {
    return (
        <div>
            <h3>Product: {products.length} </h3>

            <div className='table-container'>
                <table>
                    <thead>
                    <tr>
                        <th>id </th>
                        <th>Product Name</th>
                        <th>Price </th>
                        <th>Quantity </th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map((products, index) => 
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{products.name}</td>
                                <td>{products.price}</td>
                                <td>{products.quantity}</td>
                                <td></td>
                            </tr>
                                    )
                    }
                    </tbody>
                </table>
            </div>
            

        </div>
    );
};

export default ProductTable;
import React from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const [products, setProducts] = React.useState([]);
    
    const handleAddProduct = (newProduct) => {
        const newProducts = [...products, newProduct];
        setProducts(newProducts);
    }


    return (
        <div>
                <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
                <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;
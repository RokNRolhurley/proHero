const handleAddToCart = () => {
    const productName = document.getElementById('productName');
    const productQty = document.getElementById('productQty');

    const name = productName.value; 
    const quantity = productQty.value; 
    
    handleAddToLocalStorage(name, quantity);
    displayCart(name, quantity);
    productName.value = '';
    productQty.value = '';
}


const displayCart = (productName,quantity) => {
    const productCart = document.getElementById('product-Cart');
   
    const li = document.createElement('li');
    li.innerText = `${productName}: ${quantity}`;
    productCart.appendChild(li);
}

const getProductFromLocalStorage = () => {
    let cart = {};
    const cartFromStorage = localStorage.getItem('cart');
    if(cartFromStorage){
        cart = JSON.parse(cartFromStorage);
    }
    return cart;
}

const handleAddToLocalStorage = (productName,quantity) => {
    const cart = getProductFromLocalStorage();
    console.log(cart);

    // const cartItem = {name: quantity}; 
    // localStorage.setItem("cart", JSON.stringify(cartItem));
    // const productCart = document.getElementById('product-Cart');
    // const cartItems = productCart.querySelectorAll('li');
    // const cartArray = [];
    // cartItems.forEach(item => {
    //     cartArray.push(item.innerText);
    // });
    // localStorage.setItem('cart', JSON.stringify(cartArray));
}


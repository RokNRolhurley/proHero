
const handleAddToCart = () => {
    const productName = document.getElementById('productName');
    const productQty = document.getElementById('productQty');

    const name = productName.value; 
    const quantity = productQty.value; 
    
    saveProductToLocalStorage(name, quantity);
    displayCart(name, quantity);

    productName.value = "";
    productQty.value = "";
}


const displayCart = (productName,quantity) => {
    const productCart = document.getElementById('product-Cart');
   
    const li = document.createElement('li');
    li.innerText = `${productName} : ${quantity}`;
    productCart.appendChild(li);
}

const getProductFromLocalStorage = () => {
    let cart = {};
    const getProduct = localStorage.getItem('cart');
    if(getProduct){
        cart = JSON.parse(getProduct);
    }
    return cart;
}

const displayCartFromLocalStorage = (productName, quantity) =>{
    const products = getProductFromLocalStorage();
    for (product in products) {
        console.log(products)
    }
    
}

const saveProductToLocalStorage = (productName, quantity) => {
    const cart = getProductFromLocalStorage();

    cart[productName]= quantity;
    const cartStringfy = JSON.stringify(cart)
    localStorage.setItem("cart",cartStringfy)

    console.log(cart)

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


displayCartFromLocalStorage();
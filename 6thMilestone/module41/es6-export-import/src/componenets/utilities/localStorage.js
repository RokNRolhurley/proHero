/** 
 * 1. to getsomething from local storage, you will get it as string 
 * 2. convert this to javascript object/array
 * 
 * **/

const getCartFromLocalStorage = () =>{
    const storedCartString = localStorage.getItem('cart'); 
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return[];
}

const saveCartToLocalStorage = cart =>{
    const cartStrigyfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStrigyfied);
}

const addItemToCartLocalStorage = id =>{
    const cart = getCartFromLocalStorage();
    const newCart = [...cart, id];

    //save new art to the local storage
    saveCartToLocalStorage(newCart);
}

const removeFromLocatStorage = id =>{
    const storedCart = getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storeId => storeId !==id);
    saveCartToLocalStorage(remainingCart); 
}

export {
    getCartFromLocalStorage as getStoreCart, 
    addItemToCartLocalStorage as addToStoreedCart,
    removeFromLocatStorage as removeFromCart 
};
/*

Free Drinks
    - Burger more than $10: free coke
    - else coke $4
*/

const isBurger = true;
const burgerPrice = 8;
const cokePrice = 4;
const price = burgerPrice + cokePrice;

if(burgerPrice > 9){
    // price = price - 4;
    console.log(price - 4)
}
else {
    console.log(price)
}

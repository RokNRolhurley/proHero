const age = 16
let price = 1500
const isLeader = true; 
age >= 18 ? console.log('vote Dio') : console.log('ghumai thako')

// if(isLeader === true){
//     price = 0;
// }
// else {
//     price = price + 100;
// }

// console.log(price)

//isLeader == true ? console.log(price = 0) : console.log(price + 100)
// price = isLeader === true ? 0 : price + 100;
// console.log(price)

price = isLeader === true ? 
            price > 1000 ? 
                price / 2 : 0  
                    : price + 100;
console.log(price)

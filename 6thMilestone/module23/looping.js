const numbers = [2,3,4,5,6];

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers(i))
// }

for(const num of numbers){
    console.log(num);
}

const actor = {
    name: 'Tom Cruise',
    age: 30,
    phone: '917-912-1254'
}

// for(const key in actor){
//     console.log(actor);
// }

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

for(const key in glass){
    const value = glass[key]
    // console.log(key, value);
}
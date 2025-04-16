const laptops = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 1, name: 'hp', price: 40000},
    {id: 1, name: 'mac', price: 165000}
]

const names = laptops.map(laptop => laptop.name)
const price = laptops.map(laptop => laptop.price)

console.log(names)
console.log(price)
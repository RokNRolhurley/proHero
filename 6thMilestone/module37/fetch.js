const person = {
    name: "Brad", 
    age: 22,
    friends: ["Rambo", "Eminem"],
    country: "USA",
    family: { 
        father: "John", 
        mother: "Jane", 
        sister: "Emily"
    }
}


// const jsonData = JSON.stringify(person);
// console.log(jsonData);
// const parsedData = JSON.parse(jsonData);
// console.log(parsedData);

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error fetching data:", error));


const keys = Object.keys(person);
// console.log(keys);
const values = Object.values(person);
// console.log(values);
const entries = Object.entries(person);
// console.log(entries);

const products = [
    {name:"Edge1", brand:"Motorola", price:"200", color:"Green"},
    {name:"Edge2", brand:"Motorola", price:"500", color:"Lime"},
    {name:"GalaxyS27", brand:"Samsung", price:"1000", color:"White"},
    {name:"iPhone18", brand:"Apple", price:"1500", color:"Gold"},
    {name:"Pixel10", brand:"Google", price:"800", color:"Yellow"}
]


const newData = {
    name: "New Product",
    brand: "New Brand",
    price: "999",
    color: "Black"
}

// const updatedProducts = [...products, newData];
// console.log(updatedProducts);

const updatedProducts2 = products.filter(product => {
    return product.brand !== "Motorola";
});

const updatedProducts3 = [...updatedProducts2, newData];
console.log(updatedProducts3);
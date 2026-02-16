const products = [
    {name:"Edge1", brand:"Motorola", price:"200", color:"Green"},
    {name:"Edge2", brand:"Motorola", price:"500", color:"Lime"},
    {name:"GalaxyS27", brand:"Samsung", price:"1000", color:"White"},
    {name:"iPhone18", brand:"Apple", price:"1500", color:"Gold"},
    {name:"Pixel10", brand:"Google", price:"800", color:"Yellow"}
]

//Array Map
// const result=products.map(product => product.price);
// console.log(result);

//Array Filter
// const result = products.filter(products=>products.brand === "Motorola")
// const result = products.filter(product=>product.price >= 800);
// console.log(result);


const result = products.find(products=>products.name === "iPhone18")
console.log(result);
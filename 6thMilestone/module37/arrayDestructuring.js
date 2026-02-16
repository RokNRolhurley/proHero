// const friends = ["Don", "Rambo", "Eminem", "Brad"]
// const [element1,element2,elemnt3] = friends;
// console.log(element1,element2,elemnt3);

const person = {
    name: "Brad", 
    age: 22,
    friends: ["Rambo", "Eminem"],
    country: "USA"
}

const {name,age,friends,country} = person;

console.log(name, age);
const actor = {
    name: 'Tom Cruise',
    age: 30,
    phone: '917-912-1254'
}

// const aName = actor.name;
// const age = actor.age;

const {phone, age, name: aName} = actor

console.log(aName);
console.log(age);

const numbers = [34,43]
const {first, sesond} = numbers

function doubleThem(a, b){
    return [a*2, b*2];
}

const [frst, secnd] = doubleThem(2, 4);
console.log(frst, secnd);

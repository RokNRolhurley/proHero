const fName = "Sakil"
const lName = "Mahbub"

console.log(`i am ${fName} ${lName}`)


const sum=(a,b) => a + b;

const sum1=(...rest) => {
    console.log(rest)
}
sum(1,2,3); 

const numbers = [1,2,3,4,5,6];
const newNumbers = [...numbers, 10, 100]

console.log(newNumbers);
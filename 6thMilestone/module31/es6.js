//ES6 has the followings 
/**
 * var let const
 * default parameter
 * template string
 * arrow function 
 * destructuring and spread operator
 * Objects.keys, object.values, object.entries
 * for of used in array and string,
 * for in loop used in objects
 */



let num = [4,5,3,77,2,88,33,44]
let maxNum = Math.max(...num);
let minNum = Math.min(...num);

console.log("Max Num:", maxNum);
console.log("Min Num:", minNum);

//template String 

const msg = `Hi, ${num} has ${minNum} and ${maxNum}`;    
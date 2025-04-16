// map ==> loops through each element of the array and do the operation that you passed in the call 
// back function and hold the result from each operation in an array and finally returns you the array

const numbers = [4,5,2,8,10]

function doubleIt(num){
    console.log('num now', num)
    return num * 2;
}

const double2 = n => n * 2; 
// const result = numbers.map(doubleIt)

// const output = numbers.map(double2)
// const output = numbers.map(n => n * 2);



// const doubled = []; 
// for (const num of numbers){
//     const double = num * 2; 
//     doubled.push(double);
// }

// console.log(doubled);
// console.log(output);

const friends = ['Tom','John', 'Kanak', 'Oliver']

const long = friends.map(frnd => frnd.length);
console.log(long);
const first = friends.map(frnds=> frnds[0]);
console.log(first);



//single parameter
const getThird = numbers => numbers[2];
const third = getThird([5,9,88,2,13]);
console.log(third);

//no parameter 
const getPI = () => Math.PI
console.log(getPI());

//large arrow function
const doMath = (x, y, z) => {
    const sum = x+y+z;
    const mutli = x*y*z;
    const result = sum + mutli;
    return result;
}


// task 1

const task1 = (a,b,c) =>  {
    const multi = a*b*c
    const result = multi; 
    return result; 
}

const task1Res = task1(5,6,2);
// console.log(task1Res);


//task 2 

const sentence = (' I am a web developer. \n I love to code. \n I love to eat biryani');
// console.log(sentence);


//task 3
const task3 = (a,c=2) =>  {
    const add = a+c
    const result = add; 
    return result; 
}

const task3Res = task3(4);
// console.log(task3Res)

//task 4


function evenname(array) {
    array.forEach(element => {
        if (element.lenght % 2 === 0){
            console.log(element);
        }
    });
}  
const friens = ["pol", "john", "jacks", "jill"];
// evenname(friens);


function printEvenLengthStrings(array) {
    array.forEach(element => {
        if (element.length % 2 === 0) {
            console.log(element);
        }
    });
}

// Example usage
const strings = ["apple", "banana", "pear", "grape", "kiwi", "melon"];
// printEvenLengthStrings(friens);

//task 5

// const square1 = 

const numbers1 = [2, 3, 6];
function convertToSquare(array){
  let squar = 0;
    array.forEach(element => {
    squar = element ** 2; 
    // square.push(squar);
     console.log(squar);
   
    })
    
    // console.log(squar);
     return [squar];
}

// function valueFind(array){
//     let sum = 0;
//     for(let i = 0; i < array.lenght; i++){
//     sum += array[i];    
//     console.log(sum);
//     }
//     return sum
// }


const squar1 = convertToSquare(numbers1);
const sqr = parseInt(squar1)



// sumFunc(squar1); 
// const sum = sumFunc(squar1);
//console.log(sum);
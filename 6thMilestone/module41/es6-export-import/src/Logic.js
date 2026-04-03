
const arrays = [10, 12, 18, 6, 4]
const a1 = [4,5,6]
const arr1 = [0,0,1,2,3,5]
const arr2 = [2,3,4,4,5]
let hasZero = false;
let hasFour = false;

function either404(arrays){
    for (let i =0; i<arrays.length -1; i++) {
        if(arrays[i] === 0 && arrays[i+1] ===0){
            console.log(arrays);
            hasZero = true;
        }
        if(arrays.some((val, i) => val === 4 && arrays[i+1] ===4))
            hasFour = true;
    }
    return hasZero !== hasZero;    
    // return arr;
};

console.log(either404([3,4,2,4,6]));
//  console.log(arr);


// const hasExactlyTwoZeros = (arr) => {
//   const zerosArray = arr.filter(item => item === 0);
//   return zerosArray.length === 2;
// };

// // Examples:
// console.log(hasExactlyTwoZeros([1, 0, 5, 0, 3])); // true
// console.log(hasExactlyTwoZeros([0, 0, 0, 1]));    // false
// console.log(hasExactlyTwoZeros([1, 2, 3, 4]));    // false
// console.log(hasExactlyTwoZeros([0, 1, 2]));       // false
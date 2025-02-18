
const checkEvenLength = (arrOfFriends) => {
    //write your code here
    for(let i = 0; i < arrOfFriends.length; i++){
      
      if(arrOfFriends[i] <4 ){
        let newFriends = arrOfFriends[i];
    
        console.log(newFriends);
    }
        // return arrOfFriends[i];
        // console.log(newFriends);
    }

    }

    let array = ['John', 'James', 'Jane', 'Ratul'];
    checkEvenLength(array);




// function helloUniverse(){
//     //complete your code 
//     //Must return
    
//       let value = console.log("Hello Universe!! Welcome me to JS World!!!");
//       return value;
//     }

//     helloUniverse();


// function findOdds(arrOfNumbers) {
    
//     let sum =0;
//     for(let i = 0; i < arrOfNumbers.length; i++){

//         if (arrOfNumbers[i] % 2 != 0){
//             sum += arrOfNumbers[i];
//         }
            
//         }
//         console.log(sum);
        
//     }
    

// let numbers = [2,4,5,7,9,11,53,23];
// findOdds(numbers);



// function leapYear (numbers){

//     numbers = [2023,2024,2025,2028,2030];
    
//     let year = 356;

//     let leapyr = 364 % 4 === 0; 

//     for(let i = 0; i < numbers.length; i++){
//         if (numbers === leapYear ){
//             console.log()
//         }
//     }
    



// }



// function findingSmallest (numbers){

//     // numbers = [8,5,7,9,3,1]

//     for(let pass = numbers.length - 1; pass >=0; pass--) {
//         for (let i = 0; i <= pass - 1; i++){
//             if(numbers[i] > numbers[i+1]){
//                 let temp = numbers[i];
//                 numbers[i] = numbers[i+1];
//                 numbers[i+1] = temp; 
//             }
//         }
//     }
//     let smallestNum = numbers[0];
//     console.log(smallestNum); 
//     return smallestNum;
// }

// let numbers = [10,33,5,99,6];
// findingSmallest(numbers)




// ---------------------------
// function hourToMin(hour){
// let min = 60;
// let calculation = hour * min;
// // console.log(calculation);
// return calculation;
// }
// hourToMin(5);
//--------------------------


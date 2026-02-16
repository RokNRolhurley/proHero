// console.log("Btn click add");

//Stpe 1 - set event handler 
// document.getElementById('btn-login').addEventListener('click', function(event){
// //Step 2 - set prevent reloading browser
//     event.preventDefault();
//     console.log("Btn click add");

// //Step 3 - get phone number

// let mobileNumber = document.getElementById('text-phone').value; 
// let digitPin = document.getElementById('text-pin').value;
// // console.log(mobileNumber, digitPin);    


// if(mobileNumber === '917' && digitPin === '912')
//     console.log("You are logged");

// else{
//    alert("One entry is wrong");
// }})


document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
        console.log("Btn click add2");

   let mobileNumber = document.getElementById('text-phone').value; 
let digitPin = document.getElementById('text-pin').value;
// console.log(mobileNumber, digitPin);    


if(mobileNumber === '917' && digitPin === '912'){
    console.log("You are logged");
    window.location.href = 'http://127.0.0.1:5500/6thMilestone/module27//homePage.html';
}
else{
   alert("One entry is wrong");
}})



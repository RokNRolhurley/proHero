const container = document.getElementById("container");

container.addEventListener("mouseenter",()=>{
  //write your code here
  
  
  document.getElementById("container").textContent = "Hello World";
  
})

container.addEventListener("mouseleave",()=>{
  //write your code here
  document.getElementById("container").textContent = "Mouse Over Me";
})




// const text = document.getElementById("text");

// text.addEventListener("mouseenter",()=>{
//   //write your code here
  
  
//   text.textContent = "Hello World";
  
// })


// const input1 = document.getElementById("firstName");
// const input2 = document.getElementById("lastName");
// const fullName = document.getElementById("fullName");
// const submit = document.getElementById("submitButton");

// submit.addEventListener("click",()=>{
//   //write your code here
  
// let firstName = document.getElementById("firstName").value;
// let lastName  = document.getElementById("lastName").value;
// let fullNameA = firstName.concat(" ",lastName);
// console.log(fullName);

// document.getElementById("fullName").innerText = fullNameA;

// })
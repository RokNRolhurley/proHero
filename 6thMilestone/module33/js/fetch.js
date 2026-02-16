// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // .then(response => console.log(response))
//       .then(response => response.json())
//       .then(json => console.log(json))

function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    // .then(response => console.log(response))
      .then(response => response.json())
      .then(json => console.log(json))
}

function loadData1(){
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  fetch(url)
  // .then(response => console.log(response))
    .then(response => response.json())
    .then(json => console.log(json))
}

function loadUsers(){
  const url = 'https://jsonplaceholder.typicode.com/users';
  fetch(url)
  // .then(response => console.log(response))
    .then(response => response.json())
    .then(data => displayUsers(data))
}

function loadUsers2(){
  const url = 'https://jsonplaceholder.typicode.com/users';
  fetch(url)
  // .then(response => console.log(response))
    .then(response => response.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
  console.log(data);
}
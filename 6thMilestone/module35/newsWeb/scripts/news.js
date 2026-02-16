


// const apiKey = '7783cb11a42181f00911477a45065518';
// const url = 'https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=us&max=10';
// fetch(url, {
  
//   headers:{'x-api-key': apiKey
//   }
// })
// .then(response => response.json())
// .then(json => console.log(json))

function loadNews(){
    const apiKey = '7783cb11a42181f00911477a45065518';
    const category = 'general'; 
    const url = 'https://inshorts.deta.dev/news?category=sports';
    fetch(url)
    // .then( response =>{
    //   if(response.status === 200){
    //     console.log("error")
    //   }
      
    // })
    .then(response => response.json())
    .then(json => console.log(json))

  }
//     // fetch(url)
//     // .then(function (response){
//     //   return response.json;
//     // })
    
//     // .then(response => console.log(response))
//       // .then(response => response.json())
//       // .then(json => console.log(json))
// }



// function loadData(){
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';
//     fetch(url)
//     // .then(response => console.log(response))
//       .then(response => response.json())
//       .then(json => console.log(json))
// }

// function loadData1(){
//   const url = 'https://jsonplaceholder.typicode.com/todos/1';
//   fetch(url)
//   // .then(response => console.log(response))
//     .then(response => response.json())
//     .then(json => console.log(json))
// }

// function loadUsers(){
//   const url = 'https://jsonplaceholder.typicode.com/users';
//   fetch(url)
//   // .then(response => console.log(response))
//     .then(response => response.json())
//     .then(data => displayUsers(data))
// }

function displayUsers(data){
  console.log(data);
}
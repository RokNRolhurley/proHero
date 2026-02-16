function loadUsers2(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(res => res.json())
      .then(data => displayUsers2(data))
  }

  function displayUsers2(data){
    const ul = document.getElementById('users-list');
    const email = document.getElementById('users-email');
    for(const user of data){
        
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);

        // const li = document.createElement('li');
        // li.innerText = user.email;
        // email.appendChild(li);
    }
    
    // const data0 = data[0];
    // console.log(data0);
  }

  function deleteAPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    fetch(url, {
        method: 'DELETE',
    });    
}

function patchAPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    fetch(url,{
        method: 'PATHC',
        body: JSON.stringify({
            title: 'foo'
        }),
        headers: {
            'content-type': 'applciation/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json)); 
}
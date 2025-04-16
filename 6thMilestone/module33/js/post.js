function loadPost(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => displayPost(data));
}

function displayPost(posts){
    console.log(posts)
    const postContainer = document.getElementById('posts-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `;
        // const li = document.createElement('li');
        // li.innerText = post;
        // ul.appendChild(li);
        postContainer.appendChild(postDiv);

    }
}

loadPost();
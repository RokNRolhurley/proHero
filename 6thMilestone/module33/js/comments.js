function loadComments() {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data));
}

function testComments(){
    console.log('this is a test');
}
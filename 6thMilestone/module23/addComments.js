function postComment(){

    const postTex = document.getElementById('new-comment');
    const aretText = postTex.value; 
    const targetText = document.getElementById('p-3');
    targetText.append(aretText);

    postTex.value = "";
}
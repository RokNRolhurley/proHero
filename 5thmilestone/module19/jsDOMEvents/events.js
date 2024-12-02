console.log('this is seperate JS file');

function makeRed(){
    document.body.style.backgroundColor='red';
}


//make blue
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue; 
function makeBlue(){
    document.body.style.backgroundColor='blue';
}

//make purple
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor='purple';
}

// <!-- Option-4 -->
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink(){
    document.body.style.backgroundColor = 'pink';
}
// <!-- option-4a -->
const makeGreen = document.getElementById('make-green')
makeGreen.addEventListener('click',function doGreen()
{ document.body.style.backgroundColor ='green'})
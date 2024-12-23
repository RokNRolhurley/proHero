// function play(){
//     //1st step - hide the home screen by adding hidden in home class
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //2nd step - show the play ground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function handlekeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('Player pressed',event.key);

    //get the expected key press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet)
    
    //checked matched or not
    if(playerPressed == expectedAlphabet){
        console.log('You get a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;  
        setTextElementValueById('current-score', updatedScore);

        //-----------------------------------------------------------------------
        //update score
        // 1. get the current score
        // const currentScroeElemnt = document.getElementById('current-score');
        // const currentScoreText = currentScroeElemnt.innerText;
        // const curretScore = parseInt(currentScoreText)
        // console.log(curretScore);  
        // 2. update the score by 1
        // const newScore = curretScore + 1;
        // // 3. show the updated score
        // currentScroeElemnt.innerText = newScore;
        //-----------------------------------------------------------------------

        //start a new round
        console.log('You pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You lost a life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0 ){
            console.log('Game Over');
            gameOver();
        }


        //-----------------------------------------------------------------------        
        //1.get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // //2. update the life -1
        // const newLife = currentLife - 1;
        
        // //3. show the updated life
        // currentLifeElement.innerText = newLife;
        //---------------------------------------------------------------------------
    }
}

document.addEventListener('keyup', handlekeyboardKeyUpEvent);

function continueGame(){
    //Step-1: generate a random alphabet
    const alphabet = getRandomAlphabet(); 
   
    //set random alphabet on the screen-display
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color to the alphabets
    setBackgroundColorById(alphabet);
}

function play(){
    //hide everything show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    
    //reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score', 0);

    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
   
    // //update final score 
    // // 1. get the final score
    const lastScore = getTextElementValueById('final-score'); 
    setTextElementValueById('last-score', lastScore);
}


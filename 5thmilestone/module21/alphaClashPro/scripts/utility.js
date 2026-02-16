function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');  
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId); 
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.value;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}



function getRandomAlphabet(){
    //create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    //console.log(alphabets);

    //generate a random number 0-24
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber); 
    
    //set alphabet with numbers-index
    const alphabet = alphabets[index];
    console.log(index, alphabet);
    return alphabet;
}


// function testRandomAlpha(){
//     //Create an alphabet
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     console.log(alphabets);

//     const testGenerateRandomNumber = Math.random() *25;
//     const index = Math.round(testGenerateRandomNumber);

//     const alphabet = alphabets[index];
//     console.log(index, alphabet);
//     return alphabet;
//     }

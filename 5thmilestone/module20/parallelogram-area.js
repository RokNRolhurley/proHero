
// function calculateParallelogramArea(){

//     const base = getParalellogramBase();
//     const height = getParalellogramHeight();
//     console.log(base);
//     console.log(height);
//     const parallalogramArea = getParalellogramBase * getParalellogramHeight;
//     console.log(parallalogramArea);

    // const pentagonArea = 0.5 * pentagonPFlt * pentagonBFlt; 
    // console.log('Area of the Pentagon:', pentagonArea);

    // const pentagonAreaSpan = document.getElementById('pentagon-area');
    // pentagonAreaSpan.innerText = pentagonArea;
// }

// function getParalellogramBase(){
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText); 
//     return base;
// }

// function getParalellogramHeight(){
//     const heightInput = document.getElementById('parallelogram-height');
//     const heightText = heightInput.value;
//     const height = parseFloat(heightText); 
//     return height;
// }

function calculateParallelogramArea(){
     const base = getInputValueById('parallelogram-base');
     console.log('base value:', base)

    const height = getInputValueById('parallelogram-height');
    console.log('height value:', height)

    const area = base * height;
    console.log('Area of paralleologram is:', area)

    // const parallelogramAreaSpan = document.getElementById('paralellogram-area');
    // parallelogramAreaSpan.innerText = area;

    setInnerTextById('parallelogram-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText).toFixed(2); 
    return  inputValue;
}


function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellipse-major-radius');
    console.log('area value:', majorRadius);

    const minorRadius = getInputValueById('ellipse-minor-radius');
    console.log('base value:', minorRadius)

    const area = 3.14 * majorRadius * minorRadius; 
    console.log('Calculation of Area is:', area);

    setInnerTextById("ellipsis-area", area);
}


// function getInputValueById(inputFieldId){
//     const inputField = document.getElementById(inputFieldId);
//     const inputFieldText = inputField.value; 
//     const inputValue = parseFloat(inputFieldText);
//     return inputValue;    

// }

// function setInnerTextById(elementId){
//     const element = document.getElementById(elementId);
//     element.innerText = area;
// }


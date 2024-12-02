console.log('connected');

/**
 * Objective: get base, height of a triangle, and use the function to calculate the area.
 * Step-1: get base value ex. b & h  
 * Step-2: added an id in the base input field
 * Step-3: use getElementById to access the input field
 * Step-4: get value from the input field. (value is string now)
 * Step-5: convert the value to a number, using parseFloat
*/


function calculateTriangle(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseText = triangleBase.value;
    const triangleBaseFlt = parseFloat(triangleBaseText);

    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeight.value;
    const triangleHeightFlt = parseFloat(triangleHeightText);

    const area = 0.5 * triangleBaseFlt * triangleHeightFlt;
    console.log('Area of the triangle:', area);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
    // console.log(triangleBaseFlt);
    // console.log(triangleHeightFlt);
}


function calculateRectangle(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const rectangleWidthFlt = parseFloat(rectangleWidthText);

    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const rectangleLengthFlt = parseFloat(rectangleLengthText);

    const rectangleArea = rectangleWidthFlt * rectangleLengthFlt;
    console.log('Area of the triangle:', rectangleArea);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
    // console.log(triangleBaseFlt);
    // console.log(triangleHeightFlt);
}

function calculateRhombus(){
    const rhombusBase = document.getElementById('rhombus-base');
    const rhombusBaseWidthText = rhombusBase.value;
    const rhombusBaseFlt = parseFloat(rhombusBaseWidthText);

    const rhombusHeight = document.getElementById('rhombus-height');
    const rhombusHeightText =  rhombusHeight.value;
    const rhombusHeightFlt = parseFloat(rhombusHeightText);

    const rhombusArea = rhombusBaseFlt * rhombusHeightFlt; 
    console.log('Area of the rectangle:', rhombusArea);

    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = rhombusArea;
}

function calculatePentagon(){
    const pentagonP = document.getElementById('pentagon-p');
    const pentagonPText = pentagonP.value;
    const pentagonPFlt = parseFloat(pentagonPText);

    const pentagonB = document.getElementById('pentagon-b');
    const pentagonBText =  pentagonB.value;
    const pentagonBFlt = parseFloat(pentagonBText);

    const pentagonArea = 0.5 * pentagonPFlt * pentagonBFlt; 
    console.log('Area of the Pentagon:', pentagonArea);

    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = pentagonArea;
}



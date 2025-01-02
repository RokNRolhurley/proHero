
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.value;
    const value = elementValueText;
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function setSeatSectionColor(seatId, event){
    
    if(seatId.includes('seat')){
        event.target.style.backgroundColor = "green";
        }
    }

function setSeatAttribute(seatId, seatsId){
    if(seatId.includes('seat')){
        seatsId.setAttribute('data-store', [550,'Eco']);
        // const hasValue = seatsId.getAttribute('data-store').split(',');
        // console.log('price:', hasValue[0]);
        //     console.log('class:', hasValue[1]);
    }
}

function addSeatToCart(event){
    const getCurrentSeatNum = getTextElementValueById('add-seat');
    const getSeatNum = event.target.innerText;
    const updateSeat = getSeatNum;
    setTextElementValueById('add-seat',updateSeat);
}

function updateSeatPrice(seatsId){
    const getCurrentSeatPrice = getTextElementValueById('add-price');
    const hasValue = seatsId.getAttribute('data-store').split(',');
    const getSeatPrice = hasValue[0];
    setTextElementValueById('add-price', getSeatPrice);
}

function updateSeatEconomy(seatsId){
    const getCurrentSeatEconomy = getTextElementValueById('add-class');
    const hasValue = seatsId.getAttribute('data-store').split(',');
    const getSeatEconomy = hasValue[1];
    setTextElementValueById('add-class', getSeatEconomy);
}


function countClick(counter, seatsId){
    seatsId.onclick = function(){
    counter++;
    console.log('counter', counter);
    };
}





// function getAttributeById(elementId, value){
//     const elements = document.getElementById('[id^="seat"]');  
//         const elementId = elements.target.id;
//         const elementIdAttri = elementId.getAttributeById;
// }
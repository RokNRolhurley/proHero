
function getInputValueById(elementId){
    const element = document.getElementById(elementId).value;
    const value = parseFloat(element);
    return value;
}


function getInputTextById(elementId){
    const element = document.getElementById(elementId).innerText;
    const value = parseFloat(element);
    return value;
}


function showSectionById(id){
    document.getElementById('addMoneyForm').classList.add('hidden');
    document.getElementById('cashOutForm').classList.add('hidden');
    document.getElementById('transferMoneyForm').classList.add('hidden');
    document.getElementById('payBillForm').classList.add('hidden');
    document.getElementById('getBonusForm').classList.add('hidden');
    // document.getElementById('transactionHistorForm').classList.add('hidden');
    //show the section requested
    document.getElementById(id).classList.remove('hidden');
}


function getCurrentDate(){
    const currentDate = new Date();
    const currentDateFT = Date.toLocatDateString('en-US',{
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })}



// function setTextElementValueById(elementId, value){
//     const element = document.getElementById(elementId);
//     element.innerText = value;
// }

function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');  
}


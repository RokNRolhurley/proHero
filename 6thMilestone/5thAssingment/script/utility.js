

function getInputValueById(elementId){
    const element = document.getElementById(elementId).value;
    const value = parseFloat(element);
    return value;
}
function getElementTextById(elementId){
    const element = document.getElementById(elementId).innerText
    const elementText = parseFloat(element);
    return elementText;
}

function getCurrentDate(){
    const currentDate = new Date();
    const currentDateFT = Date.toLocatDateString('en-US',{
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })}


    function showSectionById(id){
        document.getElementById("donation-cards").classList.add('hidden');
        document.getElementById("history-container").classList.add('hidden');
        //show the section requested
        document.getElementById(id).classList.remove('hidden');
    }
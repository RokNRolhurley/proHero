
document.getElementById('btn-donateFeni').addEventListener('click', function(event) {
    event.preventDefault();

    
    let personalBalance = getElementTextById("account-balance")
    console.log(personalBalance);
    let noakhaliBalance = getElementTextById("balance-feni")
    console.log(noakhaliBalance);
    let elementValue = getInputValueById("input-feni")
    console.log(elementValue);

    if(isNaN(elementValue)){
        alert('Must be numbers');
        return
    }
    if( elementValue < 0){
        alert("Insert correct amout");
    }

    const newDonation = noakhaliBalance + elementValue;
    document.getElementById("balance-feni").innerText = newDonation;

    const balanceDeduction = personalBalance -elementValue;
    document.getElementById("account-balance").innerText = balanceDeduction;

    
})

document.getElementById('btn-donateQuota').addEventListener('click', function(event) {
    event.preventDefault();

    
    let personalBalance = getElementTextById("account-balance")
    console.log(personalBalance);
    let noakhaliBalance = getElementTextById("balance-quota")
    console.log(noakhaliBalance);
    let elementValue = getInputValueById("input-quota")
    console.log(elementValue);

    if(isNaN(elementValue)){
        alert('Must be numbers');
        return
    }
    if( elementValue < 0){
        alert("Insert corret amout");
    }

    const newDonation = noakhaliBalance + elementValue;
    document.getElementById("balance-quota").innerText = newDonation;

    const balanceDeduction = personalBalance -elementValue;
    document.getElementById("account-balance").innerText = balanceDeduction;

    
})
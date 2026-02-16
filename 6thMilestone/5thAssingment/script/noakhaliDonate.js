
document.getElementById('btn-donateNoakhali').addEventListener('click', function(event) {
    event.preventDefault();

    
    let personalBalance = getElementTextById("account-balance")
    console.log(personalBalance);
    let noakhaliBalance = getElementTextById("balance-noakhali")
    console.log(noakhaliBalance);
    let elementValue = getInputValueById("input-noakhali")
    console.log(elementValue);

    if(isNaN(elementValue)){
        alert('Must be numbers');
        return
    }
    if( elementValue < 0){
        alert("Insert corret amout");
    }

    const newDonation = noakhaliBalance + elementValue;
    document.getElementById("balance-noakhali").innerText = newDonation;

    const balanceDeduction = personalBalance -elementValue;
    document.getElementById("account-balance").innerText = balanceDeduction;

    // const p = document.createElement('p')
    // p.innerText = `Added: ${elementValue} Tk. your current personal balance is: ${balanceDeduction}`;
    const div = document.createElement("div");
    div.innerHTML = `Added: ${elementValue} Tk. your current personal balance is: ${balanceDeduction}`
    
    // <div class="toast">
    //     <div class="alert alert-info">
    //         <span>New message arrived.</span>
    //     </div>
    // </div>
    // console.log(p);

    document.getElementById("history-container").appendChild(div);
})
// // add money to account

// Step 1: add an event Handler 
document.getElementById('btn-payBillPlus').addEventListener('click', function(event){
    event.preventDefault();
    

//  Step 2: get money to add to the account
let payBillInput = getInputValueById('payBillAmount');
const payBillAcctNumb = getInputValueById('payBillAccount');
let getPayBillPin = getInputValueById('payBillPin');

if(isNaN(payBillInput)){
    alert('Fail to add money');
    return
}

// get the pin 

if(getPayBillPin === 912){
    let balance = getInputTextById('amt-total');
    let newBalance = balance - payBillInput;
    
    //update the new amount into main total
    document.getElementById('amt-total').innerText = newBalance;

    //add to transaction history
    const p = document.createElement('p');
    p.innerText = `Pay To Account: ${payBillInput} Tk. to Account ${payBillAcctNumb} balance: ${newBalance} `;
    console.log(p);

    //Should be a common function
    document.getElementById('transaction-container').appendChild(p);
}
else{
    alert("wrong pin");
}
})

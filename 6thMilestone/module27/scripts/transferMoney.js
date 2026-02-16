// // add money to account

// Step 1: add an event Handler 
document.getElementById('btn-transferMoneyPlus').addEventListener('click', function(event){
    event.preventDefault();
    

//  Step 2: get money to add to the account
const getInput = getInputValueById('transferAmount')

const accountNumb = getInputValueById('transferAccount')

if(isNaN(getInput)){
    alert('Fail to add money');
    return
}

// get the pin 
let getTransferPin = getInputValueById('transferPin');
if(getTransferPin === 912){
    let balance = getInputTextById('amt-total');
    let newBalance = balance - getInput;
    
    //update the new amount into main total
    document.getElementById('amt-total').innerText = newBalance;

    //add to transaction history
    const p = document.createElement('p');
    p.innerText = `Transfer: ${getInput} Tk. to Account ${accountNumb} balance: ${newBalance - getInput} `;
    console.log(p);

    //Should be a common function
    document.getElementById('transaction-container').appendChild(p);
}
else{
    alert("wrong pin");
}
})

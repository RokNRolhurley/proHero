// add money to account



// Step 1: add an event Handler 
document.getElementById('btn-addMoneyPlus').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('money add btn clicked')

//  Step 2: get money to add to the account

const getaddMoneyInput = getInputValueById('addMoneyAmount')


if(isNaN(getaddMoneyInput)){
    alert('Fail to add money');
    return
}

//get the pin 
let addMoneyPin = getInputValueById('addMoneyPin');
if(addMoneyPin === 912){
    let balance = getInputTextById('amt-total');
    let newBalance = balance + getaddMoneyInput;
   
    
    
    //update the new amount into main total
    document.getElementById('amt-total').innerText = newBalance;

    //add to transaction history
    const p = document.createElement('p');
    p.innerText = `Added: ${getaddMoneyInput} Tk. balance: ${newBalance}
    ${getCurrentDate()}`;
    console.log(p);

    //Should be a common function
    document.getElementById('transaction-container').appendChild(p);
}
else{
    alert("wrong pin");
}
})

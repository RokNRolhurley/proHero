


// Step 1: add an event Handler 
document.getElementById('btn-cashOutPlus').addEventListener('click', function(event){
    event.preventDefault();
    console.log('cash out btn clicked')

//  Step 2: get money to add to the account

let getInput = getInputValueById('cashOutAmount')



// if(isNaN(getInput)){
//     alert('Fail to Cash Out');
//     return
// }


// get the pin 
let getCashOutPin = getInputValueById('cashOutPin');
if(getCashOutPin === 912){


    let balance = getInputTextById('amt-total');
    if(getInput > balance){
        alert("You do not have sufficiant balance");
        return
    }

    let newBalance = balance - getInput;
    
    //update the new amount into main total
    document.getElementById('amt-total').innerText = newBalance;

    //add to transaction history
    const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
    div.innerHTML = ` 
        <h4 class="text-xl font-bold">Cash Out</h4>
        <p>${getInput} withdraw. New Balance ${newBalance}</p>
    `
    document.getElementById('transaction-container').appendChild(div);

}
else{
    alert("wrong pin");
}
})
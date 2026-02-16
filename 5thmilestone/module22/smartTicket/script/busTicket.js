

document.addEventListener('click', handleClickEvent);


function handleClickEvent(event){
    // const seatElement = event.target;
    // const seatNum = seatElement.id;
    
    
    function getSeatElementById(){
        const seatElements = document.getElementById('[id^="seat"]');  
        const seatsId = event.target; 
        const seatId = event.target.id;
        const seatElement = event.target;
        // console.log(seatElement)
        const seatNum = seatElement.id;
        // console.log(seatNum)
        // const seatsId = event.target; 
        console.log('seatsId-',seatsId);
        let counter = 0;
    
        // const seatId = event.target.id;
        // console.log(seatId);
        
        // seatsId.addEventListener("click", function(){
        //     counter=counter+1;
        //     console.log('counter', counter);
        // });
        
        // console.log (seatId);
        // console.log (seatNum);
        
        // console.log('Seat Id:', seatId); 
        // console.log('Seat Number:', seatNum); 
        // // const seatId = seatElement.
        // console.log('Seat Id:', seatId); 
        
        // if(seatId.includes('seat')){
        //     event.target.style.backgroundColor = "green";
        //     event.target.setAttribute('data-store', [550,'Economy']);
        //     const hasValue = event.target.getAttribute('data-store').split(',');
        //     console.log('price:', hasValue[0]);
        //     console.log('class:', hasValue[1]);
        //     console.log('Seat number:', seatNum);
        // }
        
        countClick(counter, seatsId)
        setSeatSectionColor(seatId, event);
        setSeatAttribute(seatId, seatsId);
        addDataToTable(seatNum, event, seatsId);
        priceCal();

        
       
            
        
        
    }
    
    
        
    // const getCurrentSeatEconomy = getTextElementValueById('add-class');
    // const seatId = event.target;
    // const hasValue = seatId.getAttribute('data-store').split(',');
    // // const hasValue = seatsId.getAttribute('data-store').split(',');
    //     console.log('price:', hasValue[0]);
    //         console.log('class:', hasValue[1]);
    // console.log(seatId);
    // const hasValue = seatId.getAttribute('data-store').split(',');
    // const getSeatPriceData = hasValue;
    // const data = getSeatPriceData[0];
    // console.log("Print attribute:",data);
    
        
    getSeatElementById();
    
    
   
}


function SubmitTicket(){
    
    
}

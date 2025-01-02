
    function addDataToTable( e, event, seatId, seatsId, seatNum){
        
            const tableBoxEL = document.querySelector("form");
            const tbodyEL = document.querySelector('tbody');
            const maxRows = 4;
            const rows = tbodyEL.getElementsByTagName("tr");

            const getSeatAtt = event.target.getAttribute('data-store');
            // console.log('print', getSeatAtt);      
            const attTest = JSON.stringify(getSeatAtt);
            const attTest1 = attTest.split(',');
            // console.log('print attTest1-', attTest1);  
            
            const getCurrentSeatNum = getTextElementValueById('table-seat');
            const getSeatNum = event.target.outerText;
            const updateSeat = getSeatNum; 
            const seatNumr = updateSeat.value;
            console.log('print sea', updateSeat);      
            
            const getCurrentSeatEconomy = getTextElementValueById('table-eco');
            const getSeatEconomy = attTest1[1];
            const seatClass = getSeatEconomy.replace(/[^a-zA-Z0-9]/g, '');
            console.log('print', seatClass);

            const getCurrentSeatPrice = getTextElementValueById('table-price');
            const getSeatPrice = attTest1[0];
            const seatPriceText = getSeatPrice.replace(/[^a-zA-Z0-9]/g, '');
            const seatPriceInt = parseInt.seatPriceText;
            // console.log('print', getSeatPrice);
            console.log('print', seatPriceText);
            
            tbodyEL.innerHTML += `
            <tr>        
                <td>${updateSeat}</td>
                <td>${seatClass}</td>
                <td class="seat-price" ><onclick="totalfunc(this)">${seatPriceText}</td>
            </tr>
            
            `;
            
            // <td><button class="deleteBtn">Delete</button></td>
        // counterTickets();

        function onDeleteRow(e) {
            if (!e.target.classList.contains("deleteBtn")){
                return; 
                }
                const btn = e.target;
                btn.closest("td").remove();        
            }

            
            // function sumTableRows(tableId) {
            //     const tableId = document.querySelector("form");
            //     const tbodyEL = document.querySelector('tbody');
            //     let rows = tableId.getElementsByTagName("tr");
            //     let total = 0;
              
            //     // Iterate through each row (excluding header if present)
            //     for (let i = 1; i < rows.length; i++) {
            //       let cells = rows[i].getElementsByTagName("tr");
              
            //       // Iterate through each cell in the row
            //       for (let j = 0; j < cells.length; j++) {
            //         let cellValue = parseFloat(cells[j].innerText);
            //         if (!isNaN(cellValue)) {
            //           total += cellValue;
            //         }
            //       }
            //     }
              
            //     return total;
            //   }
              
            //   let sum = sumTableRows("tableId"); 
            //   console.log("Sum of all rows:", sum); 
        
    }

    function priceCal(event){
        
        const getSeatPrice = attTest1[0];
        const seatPriceText = getSeatPrice.replace(/[^a-zA-Z0-9]/g, '');
        const seatPriceInt = parseInt.seatPriceText;
        const seatsId = event.target;
        var priceValue = seatPriceText;
        // console.log('seatPrice', priceValue);
        
        seatsId.onclick = function(){
        
        console.log('seatPrice - ', seatPriceInt);
        setTextElementValueById('tota-pric', seatPriceInt); 
        }
    }    
    

    




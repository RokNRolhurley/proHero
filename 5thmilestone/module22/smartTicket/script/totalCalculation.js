


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
  
//   let sum = sumTableRows("myTable"); 
//   console.log("Sum of all rows:", sum); 

// const getSumBtn = document.createElement("button");
//     getSumBtn.append("Get Total Price");
//     document.body.appendChild(getSumBtn);

//     const getSum = () => {
//       // Get all elements with the class "price"
//       const prices = document.querySelectorAll('.price');
//       let total = 0;

//       // Loop through each price and add to total
//       prices.forEach(priceElement => {
//         total += parseFloat(priceElement.textContent); // Convert text content to number
//       });

//       // Create a new row
//       const newRow = document.createElement('tr');
//       const newCell = document.createElement('td');
//       newCell.colSpan = 2; // Merge two columns
//       newCell.textContent = `Total Price: Rs ${total}`;
//       newRow.appendChild(newCell);

//       // Append the new row to the table
//       const table = document.querySelector('table');
//       table.appendChild(newRow);
//     };

//     getSumBtn.addEventListener("click", getSum);

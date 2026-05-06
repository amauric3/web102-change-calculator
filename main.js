
document.addEventListener("DOMContentLoaded", function() {
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.textContent = "Change Calculator";
  }
});

let button = document.getElementById("calculate-change");


button.addEventListener("click", function() {

  let amountDue = document.getElementById("amount-due").value;
  let amountReceived = document.getElementById("amount-received").value;

  
  amountDue = Number(amountDue);
  amountReceived = Number(amountReceived);

  
  let change = amountReceived - amountDue;

  // Converts dollars to cents to avoid decimal money problems
  change = Math.round(change * 100);

  // Finds how many full dollars fit in the change
  let dollars = Math.floor(change / 100);
  change = change % 100;

  let quarters = Math.floor(change / 25);
  change = change % 25;

  let dimes = Math.floor(change / 10);
  change = change % 10;

  let nickels = Math.floor(change / 5);
  change = change % 5;

  
  let pennies = change;

  
  document.getElementById("dollars-output").textContent = dollars;
  document.getElementById("quarters-output").textContent = quarters;
  document.getElementById("dimes-output").textContent = dimes;
  document.getElementById("nickels-output").textContent = nickels;
  document.getElementById("pennies-output").textContent = pennies;
});
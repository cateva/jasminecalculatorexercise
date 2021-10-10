function addElement(){
  return display();
}


function display(){
  let P = document.getElementById("loan-amount").value;
  let n = (document.getElementById("loan-years").value) * 12;
  let i= (document.getElementById("loan-rate").value / 100) / 12;
  let monthyPayment = ((P*i)/(1- Math.pow((1+i),-n))).toFixed(2);
  document.getElementById("monthly-payment").innerHTML = monthyPayment;
}



// window.addEventListener('DOMContentLoaded', function() {
//   const form = document.getElementById("calc-form");
//   if (form) {
//     setupIntialValues();
//     form.addEventListener("submit", function(e) {
//       e.preventDefault();
//       update();
//     });
//   }
// });

// function getCurrentUIValues() {
//   return {
// //     amount: +(document.getElementById("loan-amount").value),
// //     years: +(document.getElementById("loan-years").value),
// //     rate: +(document.getElementById("loan-rate").value),
// //   }
// // }

// // Get the inputs from the DOM.
// // Put some default values in the inputs
// // Call a function to calculate the current monthly payment
// function setupIntialValues() {
//   let loanAmount = document.getElementById("loan-amount").value;
//   let loanYears = document.getElementById("loan-years").value;
//   let loanRate = document.getElementById("loan-rate").value;
//   let monthyPayment = ((loanAmount*(loanRate/12)) / (1 - (1 + loanRate/12))**(-loanYears*12));
//   return monthyPayment
  
// }

// // Get the current values from the UI
// // Update the monthly payment
// function update() {
//   return setupIntialValues();
// }

// // Given an object of values (a value has amount, years and rate ),
// // calculate the monthly payment.  The output should be a string
// // that always has 2 decimal places.
// function calculateMonthlyPayment(values) {
// }

// // Given a string representing the monthly payment value,
// // update the UI to show the value.
// function updateMonthly(monthly) {
// }





// function calculateTax(){
//   let P = document.getElementById("loan-amount").value;
//   let n = (document.getElementById("loan-years").value) * 12;
//   let i= (document.getElementById("loan-rate").value)/12;
//   let monthyPayment = (P*i)/(1- Math.pow((1+i),-n));
//   return monthyPayment;
// }
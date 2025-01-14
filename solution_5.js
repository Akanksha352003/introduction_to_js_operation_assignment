// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    // Simple interest formula
    let simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
  }
  
  // Example usage
  let principal = 10000; // Principal amount in dollars
  let rate = 5;          // Rate of interest in percentage
  let time = 2;          // Time in years
  
  // Calculate and display the result
  let interest = calculateSimpleInterest(principal, rate, time);
  console.log(`The simple interest is: $${interest.toFixed(2)}`);
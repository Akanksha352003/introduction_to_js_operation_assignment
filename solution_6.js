// Function to calculate BMI
function calculateBMI(weight, height) {
    // BMI formula: weight / (height * height)
    let bmi = weight / (height * height);
    return bmi;
  }
  
  // Example usage
  let weight = 70; // Weight in kilograms
  let height = 1.75; // Height in meters
  
  // Calculate BMI
  let bmi = calculateBMI(weight, height);
  
  // Display the result with a descriptive message
  console.log(`Your BMI is: ${bmi.toFixed(2)}`);
  
  // Categorize BMI based on standard ranges
  if (bmi < 18.5) {
    console.log("You are underweight.");
  } else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("You have a normal weight.");
  } else if (bmi >= 25 && bmi < 29.9) {
    console.log("You are overweight.");
  } else {
    console.log("You are obese.");
  }
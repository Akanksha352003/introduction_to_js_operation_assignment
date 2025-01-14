// Function to calculate the area of a circle
function calculateAreaOfCircle(radius) {
    // Area formula: π * radius^2
    let area = Math.PI * Math.pow(radius, 2);
    return area;
  }
  
  // Example usage
  let radius = 10; // Radius of the circle
  let area = calculateAreaOfCircle(radius);
  
  // Display the result
  console.log(`The area of the circle with radius ${radius} is: ${area.toFixed(2)} square units`);
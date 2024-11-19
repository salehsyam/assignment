//!  Task 3 js
function calculateSumAndAverage(numbers) {
  const totalSum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = totalSum / numbers.length;

  return { sum: totalSum, average: average };
}

// Example usage
const numbersArray = [10, 20, 30, 40, 50];
const result = calculateSumAndAverage(numbersArray);

console.log("Total Sum:", result.sum); 
console.log("Average:", result.average); 

//!  Task 4 js

function removeDuplicates(array) {
  const uniqueValues = {}; 
  const result = [];
  for (const value of array) {
    if (!uniqueValues[value]) {
      uniqueValues[value] = true; 
      result.push(value);
    }
  }

  return result;
}

// Example usage
const stringsArray = ["ahmed", "ali", "abed", "ahmed", "ali", "lisa"];
const uniqueArray = removeDuplicates(stringsArray);

console.log("Unique Array:", uniqueArray);

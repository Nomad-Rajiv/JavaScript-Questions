/* Write a funcution that takes a number as input and return the sum of its degits. */
// eg: console.log(sum(1234));

const sumOfDigits = (number) => {
  let sum = 0;
  
  // Convert the number to a string to iterate through its digits

  let numStr =  number.toString();
  // Iterate through each digit of the number
  for(let i = 0; i < numStr.length; i++){

    // Convert each digit back to a number and add it to the sum
    sum += parseInt(numStr[i]);
  }
  return sum;
}

console.log(sumOfDigits(1234));
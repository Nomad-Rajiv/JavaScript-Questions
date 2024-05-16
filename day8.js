/* Write a function factorial that takes a non negative integer num as input and return its factorial. The factoaila of 0 is defined as 1. */

const factorial = (num) =>{
  let fact = 1;
  for(let i = 1; i <= num; i++){
    fact = fact * i;
  }
  return fact
}

console.log(factorial(10));
/* Write a function to calculate the sum of squares of all element in array. For example the given array [1,2,3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14. */


  const sumOfSquares = (arr) =>{
    return arr.reduce((accum, currVal) => (accum += currVal*currVal))
  }


console.log(sumOfSquares([1,2,3]));

// The Second way

const SumOfSquares = (arr) =>{
  let sum = 0;
  for (const ele of arr) {
    sum += arr*arr;
  }
  return sum;
}

console.log(sumOfSquares([4,5,6]));
/* Write a function called calculateMean that takes an array of numbers as input and return the mean of those numbers */

const CalculateMean = (arr) =>{
  if(arr.length === 0){
    return 0;
  }
  let sum = arr.reduce((accum, currElem) => accum + currElem, 0);
  return sum/arr.length;
}

console.log(CalculateMean([1,2,3,4,5]));




// The second way
const calculateMean = (arr) =>{
  if(arr.length === 0){
    return 0;
  }
    let sum = 0;
  for(let i = 0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum/arr.length;
}


console.log(calculateMean([]));
/* Write a function called findMode that takes an array of numbers as input and returns the mode of the array (The numbers that appears most frequently) */

const findMode = (arr) =>{
  let count = {};
  let maxNum = 0;
  let mode;
  for(let element of arr){
    count[element] = (count[element] || 0) + 1;
    if(count[element] > maxNum){
      maxNum = count[element];
      mode = element;
    }
  }
  return mode
}

console.log(findMode([1,2,2,3,4,5,6,1,2,4]));
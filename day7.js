/* Write a function findMax that takes an array of numbers as input and return the maximum number in the array
eg: console.log(findMax([1,5,3,9,2])) // output: 9
    console.log(findMax([-10,-5,-3,-9,-2])) // output: -2
    console.log(findMax([5])) // output: 5
*/

const findMax = (arr) =>{
    return Math.max(...arr)
}

console.log(findMax([1,5,3,9,2]));

// second method of doing the same question without using default function

const maximum = () =>{
  let arr = [-10,-5,-3,-9,-2];
  let max = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  console.log(max)
}

maximum()
/* Write a fucntion that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements */

const removeDuplicateArray = (arr) =>{
  let newArr = [...new Set(arr)];
  newArr.sort((a,b) => a-b)
  return newArr;
}

console.log(removeDuplicateArray([1,1,2,44,5,5,3,5,6,6,8,9]));
/* Write a function findMin that takes an array of numbers as input and return the minimum value found in the arrar */

const findMin = (arr) =>{
  arr = arr.sort((a,b) => {
    if(b>a) return -1;
  });
  return arr[0];
}


console.log(findMin([5,10,2,8]));

// The second Way
const FindMin = (arr) =>{
  return Math.min(...arr);
}


console.log(findMin([5,10,2,8,-7,-2]));
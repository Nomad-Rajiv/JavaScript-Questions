/* Write a function to sort an array of numbers in an ascending order. 
example: console.log(sortAscending([5,3,1,8])); // output: [1,3,5,8]
*/


const sortAscending = (arr) => {
  return arr.sort((a,b) => a-b );
}

console.log(sortAscending([15,3,1,20,8]));
/* Write a javascript function to count the occurences of each element in an array and store the count in object. The keys of the object should represent the element of the array, and the values should represemt the number of times each element appeares in the array */


let count = {};

const  numbers = ['a','a','b','c','a','b'];

for(let element of numbers){
  count[element] = (count[element] || 0) + 1; 
} 

console.log(count);
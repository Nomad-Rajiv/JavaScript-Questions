/* Write a function to reverse a string without using any built in methods or libraries. The function should take a string as input and reverse the string. */


const reverseString = (str) =>{
  let ReverseString = ""
  for (let i = str.length-1; i >= 0; i--) {
     ReverseString += str[i];
  }
  return ReverseString;
}

console.log(reverseString("Hello"));
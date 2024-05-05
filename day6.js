/* Write a fucntion to determine wheather a given string id z palindrome or not. A Palindrome is a word, Phrase, number, or other sequence of charecters that reads the same forward and backward, ignoring spaces, puntuations, and capitsalization. */

// console.log(isPalindrome("racecar")); // output: true
// console.log(isPalindrome("hello")); // output: false


const isPalindorme = (str) =>{
  str = str.toLowerCase().replace(/\W/g,"");
  let reverseStr = str.split("").reverse().join("");

  return str === reverseStr ? true : false;
}

console.log(isPalindorme("A man, a plan, a canal, Panama")); // Output: true

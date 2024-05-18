/* Write a function to check if a given string starts with a specific substring  */

const startsWith = (str, subStr) =>{
  return str.toLowerCase().startsWith(subStr.toLowerCase());
}

console.log(startsWith("Hello World", "Hello"));


// The second way

const StartsWith = (str, subStr) =>{
  return str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();
}

console.log(startsWith("Hello World", "World"));
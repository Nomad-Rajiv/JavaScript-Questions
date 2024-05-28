/*Write a function repeate string that takes two parameters  */

const reapetString = (str, num) =>{
  return num > 0 ? str.repeat(num) : str;
}

console.log(reapetString("abc", 0));
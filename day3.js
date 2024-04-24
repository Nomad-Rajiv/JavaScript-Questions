/* Write a function called countChar that takes two parameters: a string and a charecter to count. The function should return the number of times the specifies charecters appeares in the string. 

for eg: console.log(countChar("missIssippi", "I")) // output: 4

*/

const countChar  = (word, char) =>{
  word = word.toLowerCase();
  char = char.toLowerCase();
  
  totalChar = word.split("").reduce((accum, currentChar) => {
    if(currentChar === char){
      accum++;
    }
    return accum;
  },0);
  return totalChar;
}



console.log(countChar("missIssippi", "I"));

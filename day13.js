/* Write a function that takes a string as input and return the count of vowels in that string. consider 'a' 'e' 'i' 'o' and 'u' as vowels (both lowercase and uppercase) */

const countVowels = (str) => {
  let vowels = ['a','e','i','o','u'];
  let arr = str.split('');
  let count = 0;
  for(let char of arr){
    if(vowels.includes(char.toLowerCase())){
      count++;
    }
  }
  return count;
}

console.log(countVowels("Helllo world"));
console.log(countVowels("one fox and one deer"));

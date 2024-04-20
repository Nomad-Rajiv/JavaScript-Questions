
// you are required to implement a function generateHash that generaye hashtag from a given input string.  The hashtag should be constructed as follows:
// The input string should be constructed to a hash tag format, where each word is capatalized and concatenated together without spaces.
// If the length of the input string greater than 280 characters or if the input string is empty or contain only whitespace, the function should return  false.
// Otherwise, the function should return the generated hashtag prefixed with #.
// Example ;- console.log(generateHash("my name is rajiv");
// o/p ;- #MyNameIsRajiv 


const generateHash = (str) =>{
  if(str.length > 280 || str.trim().length === 0){
    return false;
  }
  
  // Split the string into words
  let words = str.split(" ");
  
  // Capitalize the first letter of each word
  words = words.map((word) => word.replace(word[0], word[0].toUpperCase()));
  
  // Join the words together without spaces and prepend with #
  return '#' + words.join('');
}

console.log(generateHash("this is crazy")); // Output: #ThisIsCrazy

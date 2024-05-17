/* Write a function to check if a charecter is upperCase or lowerCase */

const isUpperCase = (char) =>{
  if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
    return "UpperCase";
  }
  return "LowerCase";
}

console.log(isUpperCase('s'));



// The Second Way

const CheckCase = (char) =>{
  return char === char.toUpperCase();
};

console.log(isUpperCase('S'));

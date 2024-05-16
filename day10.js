/* Write a fucntion arraysAreEqual that takes two arrays arr1 and arr2 as input and return true if the array are equal ( contain the same elements in the same order ), and false otherwise. */

const arraysAreEqual = (arr1, arr2) =>{
  if(arr1.length !== arr2.length){
    return false;
  }

  return arr1.every((currVal, index) => currVal === arr2[index]);
}

console.log(arraysAreEqual([1,2,3] , [1,2,3]));
console.log(arraysAreEqual([1,2,3] , [1,3,3]));


// The second method 

const checkArray = (arr1, arr2) =>{
  if(arr1.length !== arr2.length){
    return false;
  }

  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
    return true;
  }
}

console.log(checkArray([1,2,3] , [1,2,3]));
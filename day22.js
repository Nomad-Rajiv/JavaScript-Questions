/* Write a javascript function findMedian that takes an array of numbers as input and return the meadian value. if the array has a even number of elements, return the average of twi middle values. */


const FindMedian = (arr) =>{
  let length = arr.length;
  let Meadian = Math.floor(length/2);

  if(length %2 === 0){
    let result = (arr[Meadian] + arr[Meadian - 1]) / 2;
    console.log(result);
  }
  else{
    return arr[Meadian];
  }
}

console.log(FindMedian([1,2,3,4,5,6]));



















// 4,5,6,10,23,24






















// const findMedian = (arr) =>{
//   arr.sort((a,b) => a-b);
//   console.log(arr);
//   let length = arr.length;
//   let median = Math.floor(length/2);
//   console.log(arr[median]);
//   if(length %2 === 0){
//     let result =  (arr[median] + arr[median - 1]) / 2;
//     console.log(result);
//   }
//   else{
//     return arr[median];
//   };
// };

// console.log(findMedian([10,23,6,4,5,24])) 

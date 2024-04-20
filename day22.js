

const findMedian = (arr) =>{
  arr.sort((a,b) => a-b);
  console.log(arr);
  let length = arr.length;
  let median = Math.floor(length/2);
  console.log(arr[median]);
  if(length %2 === 0){
    let result =  (arr[median] + arr[median - 1]) / 2;
    console.log(result);
  }
  else{
    return arr[median];
  };
};

console.log(findMedian([10,23,6,4,5,24])) 

// 4,5,6,10,23,24
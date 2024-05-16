// find average of an array 

let arr = [10,20,30,40,50];

const findAvg = arr.reduce((accum, current, index, array) => {

  let total = accum += current;
  if(index === array.length -1 ){
    return total/ array.length;
  }
  return total;
},0)

console.log(findAvg);
   
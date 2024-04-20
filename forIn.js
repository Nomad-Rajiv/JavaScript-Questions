let obj = {
  name: 'rajiv',
  phone: 123,
  address: 'rajiv nagar gurgaon'
}


for (const key in obj) {
 console.log(key);
}

let charecter = "Shree Shyam"

for (const iterator of charecter) {
  console.log(iterator);
}

// set is used to remove duplicate element into the array 

//eg:-

let array = [1,2,3,3,4,5,6,6,6,6,2,3,10];

// here we have array of duplicate elements

// let mySet = new Set(array);
// console.log(mySet);

// but in this we get result in the form of object but we want our result in the form of array so we use 
// [...and setname ] for eg:-


let mySet = [...new Set(array)]
console.log(mySet);


// this is for sorting array functions

let Array = [22,3,15,8,10];

let sortedArray = Array.sort((a,b) => a-b);

console.log(sortedArray);


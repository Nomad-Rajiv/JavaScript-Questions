


// let obj = {
//   name : "Rajiv",
//   class : 5
// };

// let user = obj;
// user.name = "Anil";

// console.log("This is copy object:", user);
// console.log("This is orignal object:", obj);


// This is about shallow copy 
// let obj = {
//   name : "Rajiv",
//   class : 5
// };

// let user = Object.assign({},obj);
// user.name = "Anil";

// console.log("This is copy object:", user);
// console.log("This is orignal object:", obj);

// Another example of Deep copy

let obj2 = {
  Name: "Suman",
  state: "Delhi",
  detals:{
    conatact: 98989898989
  }
};

// let user2 = Object.assign({},obj2); 

// ye na karke ham isme json.sting karenge 

let user2 = JSON.parse(JSON.stringify(obj2));
user2.detals.conatact = 999999999;
console.log(user2);
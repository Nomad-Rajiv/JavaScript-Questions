let age = 18;
let hadDrivingLicense = false;

if(age >= 18 && hadDrivingLicense){
  console.log("User can drive car");
}
else{
  console.log("user can not drive car");
}

let check = typeof(NaN)
console.log(check);

var x = 0;
var y1 = 23;
if(x){
  console.log(x);
}

let a1 = 10;
console.log(typeof(a1))
let b1 = typeof(typeof(a1))
console.log(b1);

if(5 === '5'){
  console.log(true);
}
else{
  console.log(false);
}

console.log("12" /  2);

var c = 5;
console.log(c++);
console.log(c);

console.log(1 < 2 < 3);
console.log(2 < 12 < 5);

let ageofRavi = 15

let result = ageofRavi>=18 ? "He can drive" : `He Cannnot  Drive`
console.log(result);

console.log("5" - 3);

console.log(typeof("20" + 10 + 10));

// for(let i = 0; i < 3; i++){
//   setTimeout(()=>{
//     console.log(i);
//   },1)
// }
// for(let i = 0; i < 3; i++){
//   setTimeout(()=> console.log(i),1)
// }

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
function foo(){
  x = 10;
  console.log(x);
}

foo()
console.log(x);

var a = 10;
{
  var a= -10;
}

let b = a;
{
  let b = -20;
}
console.log(b);



for (var j = 0; j < 3; j++) {
  console.log(j);
  
}
console.log('J outside the loop', j);
 y = 3;
console.log(y);
var y;

var a = 1;
console.log(a);

var a = 2;
console.log(a);


function hoisting(){
  var a;
  console.log("Before ", a);
  a = 10;
  console.log("after", a);
}

hoisting()

  function hoistingExample() {
    console.log(`Value of ${a} in local scope: `, a);
  }

  console.log(`Value of ${a} in global scope:` , a);
  var a = 1;
  hoistingExample();
  
  function hoistingExample() {
    a = 1;
   }
   hoistingExample();
   console.log(a);

   function a3(){
    console.log("1")
   }
   a3();
   function a3(){
    console.log("2")
   }
   a3();

   console.log(a4());
function a4() {
 function b() {
 return 3;
 }
 return b();
 function b() {
 return 8;
 }
}

function foo(n) {
  if (n == 6) {
  var num = 2;
}
console.log(num);
 }
 var n = 6;
 console.log(n);
 foo(6);

 function parent() {
  var hoisted = "I'm a variable";
  function hoisted2() {
   return "I'm a function";
   }
  return hoisted2();
  }
  console.log(parent());

  console.log(foo());
function foo() {
var bar = function () {
 return 3;
 };
return bar();
var bar = function () {
 return 8;
 };
}

(function () {
  
  console.log("Orignal value is :" + myVar);
  var myVar = "Apple"
})()

var text = 'outside';
function logIt() {
  console.log(text);
  var text = 'inside';
}
logIt()

 
let num  = 39;
if(num%2 == 0){
  console.log("the given number is even ");
}
else{
  console.log("Given number is odd");
}

let num1  = 3;
switch(num1){
  case 1:
  num1 = 'Monday';
  break;

  case 2:
    num1 = 'Tuesday';
    break;
  case 3:
    num1 = 'wednesday';
    break;
  case 4:
    num1 = 'Thrusday';
  break;
  case 5:
    num1 = 'Friday';
  break;
  case 6:
    num1 = 'Saturday';
  break;
  case 7:
    num1 = 'Sunday';
  break;
}

console.log(num1);

let checkNumber = 20;
if(typeof(checkNumber) === 'number'){
  console.log('The given variable is number');
}
else{
  console.log('NOt a number');
}

let spliceArr = ['Aman','Rehman','karan','ram','suresh','dagabaaj'];

let newArr = spliceArr.slice(0,2);
console.log(newArr);

let charecter = 'Haldirams';

for (const value of charecter) {
  let sorting = value
  console.log(sorting);
}



// for map
let mapArr = [1,2,3,4,5]
let newMap = mapArr.map((value)=>{
  return value*value;
})
console.log(newMap);

// forEach
let newForEach = mapArr.forEach(element => {
 console.log( element * element);
});


// filter method 
let arr3 = [23,45,6,30,4,5,2,10];

let newArr3 = arr3.filter(value =>{
 return  value < 10
})

console.log(newArr3);
console.log(arr3);

// Reduce method

let Arr = [1,2,3,4,5]

let NewArr = Arr.reduce((h1,h2)=>{
  return h1 * h2;
})

console.log(NewArr);

// so this return only single value 

// Reduce function containe four parameters 1. accumalator 2. current value 3. index 4. array

// using this reference we will solve an example 
// Find  an array of average using reducer fucntuon

let avg = [10,20,30,40,50];

let findAvg = avg.reduce((accum, current, index, array)=>{
  let total = accum += current;

  
  if(index === array.length -1 ){
    return total/array.length;
  }
  return total;
  
});

console.log(findAvg);
console.log('rajiv kumar');
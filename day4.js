/* Write a function callled checkTriangleType that takes three parameters representing the lenghths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", " isosceles", "scalene" */

const checkTriangleType = (a,b,c) =>{
    if(a === b && b === c){
      return "equilateral";
    }
    if(a === b || b === c || a === c){
      return "isosceles";
    }
    return "scalene";
};

console.log(checkTriangleType(3,3,3));
console.log(checkTriangleType(3,4,3));
console.log(checkTriangleType(3,4,5));
// Write a function to calculate the factorial of a number. ( Using recursion )

const factorial = (num) =>{
    if(num === 1){
      return 1;
    }
    else{
      return num * factorial(num -1);
    };
};


console.log(factorial(10));
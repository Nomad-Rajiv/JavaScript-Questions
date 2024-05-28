/* Write a function to find the nth fibonnaci number */

const fibonnaci = (num) =>{
  if(num <= 1){
    return num;
  }
  else{
    return fibonnaci(num - 1) + fibonnaci(num -2);
  }
}

console.log(fibonnaci(2));
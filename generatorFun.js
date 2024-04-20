// we declare generator function using * 
// In this function we can resume the fucntion and start

// function* generatorFun() {
//    let i = 100;
//    while(true){
//     i++;
//     yield i;
//    }
// }


// let sG = generatorFun();





// function getNewId() {
//   console.log(sG.next());
//   document.getElementById('newId').innerText = sG.next().value;
// }



const getRandomNumber = (time) =>{
  const numberPromise = new Promise((resolve) =>{
    setTimeout(() =>{
      resolve(Math.random());
    },time);
  });
  return numberPromise;
};

function* printRandomNumber() {
  let number = yield  getRandomNumber(1000);
  console.log("The number is :", number);

  number = yield getRandomNumber(2000);
  console.log("number is :" , number);
}

let run = printRandomNumber();
run.next().value.then((result) => {
  console.log(result); // Output: The random number generated after 1000ms
});
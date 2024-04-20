// let count = true;

// let countValue  = new Promise(function(resolve,reject){
//   if(count){
//     resolve("This is true");

//   }
//   else{
//     reject("This is not true");
//   }
// });
// console.log(typeof(countValue));


// let count = false;

// let countValue  = new Promise(function(resolve,reject){
//   if(count){
//     resolve();

//   }
//   else{
//     reject();
//   }
// });


// countValue.then(function(){
//   console.log("This is resolve");
// }).catch(function(){
//   console.log("This is rejected");
// });

// console.log(typeof(countValue));


function prom(){
  return new Promise(function(resolve, reject){
    console.log("fetching data, please wait");
    setTimeout(() =>{
      fetch("https://jsonplaceholder.typicode.com/post")
      .then(response =>{
        if(!response.ok){
          throw new Error("Failed to load data");
        }
        return response.json();
      })
      .then(data =>{
        resolve(data);
      })
      .catch(error =>{
        reject(error)
      });
    },1000);
  });
}
  
    
        
prom().then((result)=>{
  console.log(result);
}).catch((error) =>{
  console.log(error);
});
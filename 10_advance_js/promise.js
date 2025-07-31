const promiseOne = new Promise((resolve, reject) => {
  //here we can do some
  // async operation like fetching data from an API

  setTimeout(() => {
    console.log("async task done");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consume");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2 ");
    resolve(); //another async task
  }, 1000);
}).then(() => {
  console.log("async to resolved");
});

//another way to write promise

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userNmae: "sam", age: 20 });
  }, 1000);
});

promiseThree.then(function (data) {
  console.log(data);
});

//another way to write promise

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "sam", password: "1234" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});



// Chaining promises

promiseFour
  .then((data) => {
    console.log(data);
    return data.userName;
  })
  .then((userName) => {
    console.log(`User name is ${userName}`);
  })
  .catch((error) => {
    console.log(error);
  }).finally(() => {  
console.log("the promise either resolved or rejected");
  
})

    

// Promise five

const promiseFive = new Promise((resolve, reject) => {

setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: "js", password: "1234" });
    } else {
      reject("js went wrong");
    }
  }, 1000);

})

//another way with async 

async function consumePromiseFive() {

try{
      const responce =  await promiseFive

  console.log(responce);
}
catch(error){
console.log(error);

}
  
}

consumePromiseFive()




//api call with async await


async function getAllUsers(){
 try{
    const responce =  await fetch('https://jsonplaceholder.typicode.com/users')

    // console.log(responce);
    
//  const data=await responce.json()
// //  console.log(data);
 
 }catch(error){
console.log(error);

 }
}

getAllUsers()


//api call with .then

fetch ('https://database-cxg5.onrender.com/products')
.then((responce)=>{
    return responce.json()
})
.then((responce)=>{
console.log(responce);

})
.catch((error)=>console.log(error))
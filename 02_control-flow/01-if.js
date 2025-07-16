//if

// we use boolean condition here
//<,>,<=,>=,==,!=,=== , !==
const isUserLoggedIn = true;
const tempreture = 41;

// if(tempreture < 50){

//     console.log("less then 50 ");

// }
// else{
// console.log("temp greater than 50");
// }

// const score=200

// if(score > 100){
//     const power="fly"
//     console.log(`user power: ${power}`);

// }

// console.log(`user power: ${power}`);we can not run this because of score

//short hand notation

// if (balance > 500) console.log("test"),

console.log("test2"); // we can not use this type code writting till first test its fine in some cases




//nested if
// const balance = 1000;

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }



//checking multiple statements


const userLoggedIn=true
const debitCard= true
const loggedInFromGoogle=false;
const loggedInFromEmail =true

if (userLoggedIn && debitCard) {  //both condition should be true then only this code will execute her we are using and operator
    console.log("allow to buy course");
    
}

if (loggedInFromGoogle  || loggedInFromEmail) { // multiple condition check here if one condition is true than code will execute because here we are using or operator
    console.log("user logged in");
    
}
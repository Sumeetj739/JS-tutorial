//Primitive 
// 7 types : string,number,boolean,null,undefined ,symbol,bigint

const id =Symbol('123')
const anotherId =Symbol('123')
console.log(id === anotherId);



//reference or non premitive 
//array ,objects ,functions 

const heros=["shaktiman","nagraj","doga"] //array

//object

let obj={
    name:"sumeet",
    age:22,
}

//function

const myFunction=function(){
    console.log("hello world");
    
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++

//memory :Stack (primitive)  ,heap (non-primitive)


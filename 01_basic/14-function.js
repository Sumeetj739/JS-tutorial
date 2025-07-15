function sayMyName() {
  console.log("h");
  console.log("e");
  console.log("l");  //function name and declearation
  console.log("l");
  console.log("o");
}

// sayMyName()  //function call

// function addTwoNumbers(num1,num2){ //parameters
//     console.log(num1+num2)
// }

function addTwoNumbers(num1,num2){ //parameters
     return (num1+num2)  //after return no code works
}

const res = addTwoNumbers(3,4)            //value passend here is called arguments
console.log(res);


//diff ways of parameter and passing argument

function loginUserMessage(userName){
    if(!userName){
        console.log("please enter user name ");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("sumeet"))
// console.log(loginUserMessage()) //if we does not pass value here by default it take default value


//cart function with rest operater


function calculateCartPrice(...num1){
return num1
}

// console.log(calculateCartPrice(200,400,500));

//function to  handle object
const user ={
    // userName1:"sumeet",
    // price:199
}

function handleObject(anyObject){
    console.log(`user is ${anyObject.userName1} and price is ${anyObject.price}`);
    
}

handleObject(user);

handleObject({
    userName1:"sam", //here we can pass the object also
    price:3999
})


const myNewArray=[200,400,100,600]

function returnsecondValue(getArray){
    return getArray[1]
}

console.log(returnsecondValue(myNewArray));

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

console.log(loginUserMessage("sumeet"))
console.log(loginUserMessage()) //if we does not pass value here by default it take default value

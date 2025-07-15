const user ={
    username:"sumeet",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        //this refers to current contex
        
    }

}

user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// /////////////------------//////////

// function chai(){
//     let username="sumeet"
//     console.log(this.username);
    
// }

// chai()  //the o/p will be  undefined here we cannot use current contex in fumctios


// const chaii = () =>{
//       let username="sumeet"
//     console.log(this.username);
// }

// chaii()

//---------arrow functio --------------------/////////

const addTwo =(num1,num2)=>{  ///basic /explicit arrow function while we curly braces in arrow function here we have ti write return key word
    return num1+num2
}


const adTwo =(num1,num2)=> num1+num2  //implicit return no need off return keyword here

const aTwo =(num1,num2)=> (num1+num2)  // diff way of omplementing implicit return

    


console.log(adTwo(1,5));



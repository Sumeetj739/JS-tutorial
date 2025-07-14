//date is object of java script

const { data } = require("react-router-dom")

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())
console.log(typeof myDate);


//month is started with zero in dates
// let myCreatedDate  = new Date(2023 ,0,23)

//format for date and time
// let myCreatedDate  = new Date(2023 ,0,23,5,3)


let myCreatedDate  = new Date(2023 ,0,23,5,3)

console.log(myCreatedDate.toDateString());


//timestaps

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long"
})
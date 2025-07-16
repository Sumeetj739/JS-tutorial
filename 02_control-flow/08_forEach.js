//for each with normal function

const arr =[1,2,3,4,5,6,7]

arr.forEach(function (val) {
//    console.log(val);
    
});

//for each with arrow function


arr.forEach(element => {
    console.log(element);
    
});



//for each with functions

function printMe(item){
    console.log(`hi`+item);
    
}

arr.forEach(printMe)


//

//iteration on array of objects
const products=[{
    names:"sumeet",
    age:12
 },
 {
    names:"sam",
    age:1
 },
 {
    names:"ram",
    age:121
 },
 { 
 names:"samu",
    age:125336
 }
]


products.forEach(element => {
    console.log(element.names);
    
});
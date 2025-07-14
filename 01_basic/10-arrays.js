//array is object in js
//js arrays are resizable


const myArr= [1,2,3,4,5,6]
// console.log(myArr[1]);


//array methods
myArr.push(6)   //add value
myArr.push(7)   //add value
myArr.pop()     //remove last element
// console.log(myArr);


myArr.unshift(9) //add element at first position 
// console.log(myArr);

myArr.shift()   //removes added element by unshift
// console.log(myArr);


//quentionair methods

// console.log(myArr.includes(3));
// console.log(myArr.includes(13));

// console.log(myArr);

//slice  , splice

console.log("a",myArr);

const myn1 = myArr.slice(1,3)  //slice it gives copy and array remains same
console.log(myn1);

console.log("b",myArr);

const myn2 = myArr.splice(1,3) //in splice orignal array will manipulate
console.log("c",myArr);

console.log(myn2);





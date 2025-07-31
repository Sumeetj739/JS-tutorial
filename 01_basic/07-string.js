// //string can denoted by sigle qoute '' and double qoute ""

// const name="sumeet"
// const repoCount=50

// console.log(name + repoCount); // modern days no use this method

// console.log(`hello my name is ${name} and my repo count ${repoCount}`)
// //we use string interpoletion here because of this code readability is increased

// // anothr way to declare string
// const gameName= new String('pubg')

// console.log(gameName[0]);

// //using string methods
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('g'));

// const newString=gameName.substring(0,1)
// console.log(newString);

// //we can use negative values in slice
// const anotherString=gameName.slice(1,3)
// console.log(anotherString);


// //to avoid spacec in string
// const demoString="    hello        "
// console.log(demoString);
// console.log(demoString.trim());


// //replace 
// const url="https://sumeeet.com/sumeet%20jadhav"
// console.log(url.replace('%20','-'));

// console.log(url.includes('jadhav'));




const names ="sumit";

//how to reverse a string
const reverseString = (str) => str.split('').reverse().join(''); 
console.log(reverseString(names )); // Output: timus

let revString = (str)=>str.split('').reverse().join('');
console.log(revString(names)); // Output: timus
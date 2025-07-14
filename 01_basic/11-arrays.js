const marvelHeros=["thor" , "ironmar", "spiderman"]
const dc=["superman" , "flash", "batman"]

// marvelHeros.push(dc) //here we merge two array but here is one problem the second array will be stored here as element
// console.log(marvelHeros[3][1]); //its not good practice 

const allHeros =  marvelHeros.concat(dc) //it stores every element in one array and this stored in allheros
console.log(allHeros);


//spread array

const spread = [...marvelHeros,...dc]
console.log(spread);


//mostly concat and spread is used 


//if we have array like this we use flat method
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const array1=another_array.flat(Infinity)
console.log(array1);



console.log(Array.isArray("sumeet")) //it checks that the element is array or not
console.log(Array.from("sumeet"))   //from makes  arrays

console.log(Array.from({name:"sumeet"}))   //making arrays from keys 


//making arra of elements
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


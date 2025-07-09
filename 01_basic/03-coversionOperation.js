// converting string in number
//suppose if let score value is 33abd it convert 
// in number but its value will be nun so be carefull 
// while number conversion
let score="33"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);

//examples---
// "33" -> 33
//"33abs"-> nan
//true  -> 1    false -> 0
//1 -> true   0 -> false
//"" -> false
//"hitesh" ->1
//we can also convert number in string
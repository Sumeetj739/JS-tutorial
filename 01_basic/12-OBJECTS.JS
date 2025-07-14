//singleton

//objects literals/and use symbol in objects 
const mySym=Symbol("key1") //using symbol in object

const Jsuser = {
  name: "sumeet",
  age: 30,
  "location": "parbhani",  //use squre braces for accesing data in qoutes 
  email: "sumeetj739@gmail.com ",
  isLoggedin: false,
  lastLoginDays: ["monday", "saturday"],
  [mySym]:"mykey1 "  //we have to mension symbol in squre braces
};

console.log(Jsuser.email);  //not  a right way to access object
console.log(Jsuser["email"]); //right way to access object
console.log(Jsuser["location"]); //right way to access object

console.log(Jsuser[mySym]); //right way to access object


Jsuser.email="sumeet@yahoo.com"
// Object.freeze(Jsuser)
Jsuser.email="sumeet@gmail.com"
console.log(Jsuser);


Jsuser.greeting = function(){
  console.log("hello js user");
    
}

Jsuser.greetingTwo = function(){
  console.log(`hello js user, ${this.name}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());


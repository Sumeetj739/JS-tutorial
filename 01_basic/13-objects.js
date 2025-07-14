// const tinderuser = new Object()//singleton object

const tinderuser = {}; //non singleton onject

tinderuser.id = "12";
tinderuser.name = "sammy";
tinderuser.isloggedIn = false;

// console.log(tinderuser);

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullname: {
      firstname: "sumeet",
      lastname: "jadhav",
    },
  },
};
// console.log(regularUser.fullName.userFullname.firstname);

//merge objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)//best way to combine two object

const obj3 = { ...obj1, ...obj2 }; //best way to combine two object

console.log(obj3);

const Products = [
  {
    name: "doce",
    id: 2,
  },
  {
    name: "docdosee",
    id: 3,
  },
  {
    name: "ferf",
    id: 3,
  },
  {
    name: "dtggt",
    id: 4,
  },
  {
    name: "ocsefe",
    id: 5,
  },
];

console.log(Object.keys(Products));
console.log(Object.values(Products)); //objects methods
console.log(Object.entries(Products));

const course = {
  courseName: "js",
  price: "999",
  courseInsctructor: "sumeet",
};

//another way of getting object value(objecct destructuring)
const { courseInsctructor: instructor } = course;

console.log(instructor);

//api

// //json object from api
// {
//     "name":"sumeet",
//    " courseName ": "js",
//    " price":"free"
// }

//api in form of arra

[
    {},
    {}, 
    {}, 
    {}
];

const userEmail="s@sumeet.ai"


if(userEmail){
    // console.log("got user mail");
    
}
else{
    // console.log("dont have userr mail");
    
}

// falsy value
// false , 0 ,-0 ,BigInt 0n ,"" , null , undefined ,NaN

//truthy values
// "0" , 'false'  , " ", [] , {} , function () { } 


//how to check empty array

const arr=[]

if (arr.length ===0){
    console.log("array is empty");
    
}

//how to check empty object

const emptobj={}
if (Object.keys(emptobj).length===0){
    console.log("object is empty");
    
}



//nullish coalescing operator (??) : null undefined

let val1;

// val1 =5 ?? 10
// val1=null ?? 10
// val1 = undefined ?? 15
val1 =null ?? 10 ?? 20 

console.log(val1);

//terniary operator
//codition   ?  true   :  false
const iceTeaPrice = 1000

iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log("more than 80");



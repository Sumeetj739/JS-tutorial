//Immediately invoked function IIFE

(function chai(){  //named iife
    console.log(`db connected`);
    
}) ();




//Immediately invoked function IIFE with arrow fuction
//no-parameter iife 

(()=>{
    console.log(`db connected two`);
    
}) (); //while using iife use semicolon 



//parameter iife 
((name) => {
    console.log(`db connected two ${name}`);
    
}) ('sumeet')
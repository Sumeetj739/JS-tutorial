//for loop

// for (let j = 0; index < 10 ; index++) {
//     const element = index
//     if(element == 5){
//         console.log ( "5 is best number");
        
//     }
// console.log(index);
    
// }


for (let index = 0; index <= 10; index++) {
    console.log( `outer loop : ${index}`);
    
    for (let j = 0; j <= 10 ; j++) {
    //  console.log(`inner loop : ${j} and inner loop${index}`);
   console.log(index + '*' + j + ' =' + index*j);
        
    }
}



//for loop arrays

let myArrays =["sam ","ram","sham"]

for (let index = 0; index < myArrays.length; index++) {
    
    console.log(myArrays[index]);
    
}


// break and coutinue

for (let index = 0; index < 20 ; index++) {
if (index == 10 ) {
    console.log(`detected 10`);

    break;
    
}    
console.log(index);

}

for (let index = 0; index < 20 ; index++) {
if (index == 10 ) {
    console.log(`detected 10`);

    continue;
    
}    
console.log(index);

}
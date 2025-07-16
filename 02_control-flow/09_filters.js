//filters in filters we give one condition 
//and acording to that condition we get values from given array

const arr =[1,2,3,4,5,6,7]


// const sorrtedNums =arr.filter((num )=> {
// return num > 4  //one way of using filters due to scope we have to mension return
// })

// const sortedNums =arr.filter((num )=> num > 4) // another way of using filters


// console.log(sortedNums);


// above same operation using if but it has big syntax and more logic than filters

const newNums=[]

arr.forEach((num)=>{
    if (num > 4){
        newNums.push(num)
    }
})
console.log(newNums);




const myNums=[1,2,3]

// const muTotal=myNums.reduce(function(acc,currentVal){
//     console.log(`acc:${acc} and current value${currentVal}`);
    
//     return acc + currentVal
// },0)

// console.log(muTotal);


// reduce with arrow function


const myTotal = myNums.reduce((acc,currval)=> acc+currval,0)

console.log(myTotal);



const shoppingCart=[
    {iteamName:"apple",
    price:55
    },

    {iteamName:"samsung",
    price:33
    },

    {iteamName:"vivo",
    price:66
    },

    {iteamName:"oppo",
    price:5
    },
]
let price=shoppingCart.reduce((acc,iteam)=>acc+iteam.price,0)
console.log(price);

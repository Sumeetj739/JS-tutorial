//for of loop is used on array and maps it not worked on object
//for of loop on array

const arr=[1,2,3,4,5,6,7]

for (const element of arr) {
    
    console.log(element);
    
}


//for of loop on strings


const name="sumeet jadhav"

for (const element of name) {
    console.log(`elements of ${element}`);
    
}



//maps 

const map = new Map()
map.set('in',"india")
map.set('ban',"bangladesh")
map.set('fr',"france")

console.log(map);

for (const [key,value] of map) {
    console.log(key,'=>',value);
    
    
}
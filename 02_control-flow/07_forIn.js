//for in loop for object

const obj={
    js:'javasccript',
    cpp:'c++',
    rb:'ruby'
}

for (const key in obj) {
   
    console.log(`${key} shortcut is for ${obj[key]}`);
    
}

//for in loop for array

const arr=["js","ruby","java"]

for (const key in arr) {
 

    console.log(arr[key]);
    
}
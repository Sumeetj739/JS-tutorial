const cloack=document.querySelector('.clock')



setInterval(function() {
let date=new Date()
console.log(date.toLocaleTimeString);
cloack.innerHTML=date.toLocaleTimeString()
},1000)
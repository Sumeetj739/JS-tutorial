


const buttons=document.querySelectorAll('.button')
console.log(buttons);
const body=document.querySelector("body")
console.log(body);

buttons.forEach(function(button) {
console.log(button);

button.addEventListener('click', function(event) {
    console.log(event);
    console.log(event.target);
    
    if(event.target.id ==='red'){
        body.style.background=event.target.id;
    }

    if(event.target.id ==='pink'){
        body.style.background=event.target.id;
    }

    if(event.target.id ==='yellow'){
        body.style.background=event.target.id;
    }

    if(event.target.id ==='green'){
        body.style.background=event.target.id;
    }

})
})
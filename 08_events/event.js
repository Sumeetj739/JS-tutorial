// document.querySelector('#owl').onclick = function() {  //onclick gives less features than addEventListener
// alert('Owl clicked!');
// }



document.querySelector('#owl').addEventListener('click',function(e) {

    console.log(e); //e is the event object
    
} )//best approach


//IMP
//typeof event , timeStamp, defaultPrevented, 
//event.target, to element, source element, currentTarget,
//clientX, clientY, offsetX, offsetY, pageX, pageY,
// altKey, ctrlKey, shiftKey, keycode

// document.querySelector('.images').addEventListener('click', function(e) {
//     console.log("clicked inside the ul");

// },false) //false means bubbling phase, true means capturing phase

// document.getElementById('owl').addEventListener('click', function(e) {
//     console.log("clicked owl");
//     e.stopPropagation() //this will stop the event from bubbling up to the parent elements

// },false) 


    
document.getElementById('google').addEventListener('click', function(e) {
    e.preventDefault() //this will prevent the default action of the link, which is to navigate to the href
    e.stopPropagation()
    console.log("clicked google");

},false) 




document.querySelector('.images').addEventListener('click', function(e) {

console.log(e);
console.log(e.target);// this will give the element that was clicked
let removeIt = e.target.parentNode
if (e.target.tagName === 'IMG') {
    removeIt.remove() // this will remove the parent element of the image that was clicked
    console.log("Image removed");

}



})



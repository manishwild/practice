window.onload = ()=>{
    let btn = document.querySelector('#someBtn')
    //first way create event dynamically\
//     btn.addEventListener('click',function(e){
//         console.log(e)
//     })
//second way to add event dynamically
btn.onclick = function (e) {
    console.log(e)
    if(e.clientY>15){
        console.log('down')
    }else{
        console.log('up')
    }
}
let container = document.querySelector('#container')
let someInput = document.createElement('input')
someInput.setAttribute('type','text')
container.append(someInput)
someInput.addEventListener('keypress', function (e) {
    console.log(e)
})




 }

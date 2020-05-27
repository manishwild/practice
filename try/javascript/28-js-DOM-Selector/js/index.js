//you cannot create function inside function
window.onload = ()=>{
    let elements = document.getElementsByClassName('card-head')
    console.log(elements.length)
    let h3 = document.getElementsByTagName('h3')
    console.log(h3)
    let elm = document.querySelector('.card-content')//querySelector it will only select first element in the document
    console.log(elm)
    let elms = document.querySelectorAll('.contact-container li')//queryselectorsAll will select all li
    console.log(elms)
    console.log(bla('.social a'))
}
function bla(params) {
    return document.querySelectorAll(params)
}
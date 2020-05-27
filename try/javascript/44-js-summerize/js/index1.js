//task1 write a code on btn1 show a alert hello msg
window.onload = ()=>{
    const btn1 = document.querySelector('#btn1')
    btn1.onclick=()=>{
        alert(`Hello Manish`)

    }

// task 2 create a red square div inside container div
const btn2 = document.querySelector('#btn2')
const container = document.querySelector('#container')
btn2.addEventListener('click',(e)=>{
    let newDiv = document.createElement('div')
    container.append(newDiv)
    newDiv.style.background = 'green'
    newDiv.style.height='50px'
    newDiv.style.width = '50px'
    
})
}
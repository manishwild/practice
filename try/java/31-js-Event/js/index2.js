window.onload = ()=>{
    let link = document.querySelector('#someLink')
    link.addEventListener('click',function (e) {
        console.log(e)
        e.preventDefault()
        console.log('Hello World')
    })
    let mainDiv = document.querySelector('#mainDiv')
    let subDiv = document.querySelector('#subDiv')

    mainDiv.addEventListener('click',function () {
        console.log('hey i am main div'+this.id)
        
    })
    subDiv.addEventListener('click',function(e) {
        e.stopPropagation()
        console.log('hey i am sub div')
        
    })
}
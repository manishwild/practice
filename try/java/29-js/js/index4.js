window.onload = ()=>{

    let div = document.querySelector('#someDiv')
    div.style.height = '50px'
    //div.style.backgroundColor = 'blue'
    //div.style.borderRadius ='10px 0 10px 0'
    div.classList.add('mystyle')
    div.classList.add('mystyle1')
    div.classList.remove('mystyle1')
    let father = div.parentElement
    father.style.border ='1px solid blue'

    setInterval(() => {
       div.classList.toggle('mystyle') 
       div.classList.toggle('mystyle1')
    }, 1000);

}
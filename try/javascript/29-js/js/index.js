window.onload = () =>{
    let div = document.querySelector('#somDiv')
    div.style.backgroundColor = 'blue'
    div.style.height ='50px'
    let i = 50
    setInterval(() => {
        i++
        div.style.height = i + 'px'
    }, 100);
}
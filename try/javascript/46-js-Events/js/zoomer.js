window.onload = ()=>{
    //get html elements
    const container = document.querySelector('#container')
    const par = document.querySelector('#container>p')
    //declare font size
    let fontSize = 16 
    //assign the direction of wheel(scroll)
    container.onwheel = e=>{
        console.log(e.deltaY);
        if (e.deltaY > 0) {
            fontSize++
        } else {
            if (fontSize > 0) {
                fontSize--
            }
        }
        console.log(fontSize);
        
        par.style.fontSize = fontSize + 'px'
    }
}
window.onload = ()=>{
    let div1=document.querySelector('#ball')
    let i =0
    let direction = true
    let x = 0
    let interval=

    setInterval(() => {
        if (direction) {
            i++
        } else {
            i--
        }
        if (i == 180) {
            direction = false
            x+=20 
        }
        if (i==x) {
            direction=true
        }
        if (x==180) {
            clearInterval(interval)
        }
        div1.style.top=i+'px'
    }, 1);
}
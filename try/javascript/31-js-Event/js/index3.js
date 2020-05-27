window.onload = ()=>{
    let container = document.querySelector('#container')
    container.addEventListener('click',function (p) {
        console.log(p)
        let ball = document.createElement('div')
        ball.classList.add('ball')
        //balldiv.setAttribute('class','ball') set the value of an attribute on the specified element.if the attribute already exist,the value is updates;otherwise a new attribute is added with the specified name and value
        ball.style.left = p.clientX - 5 +'px'
        ball.style.top = p.clientY - 5 + 'px'
        container.append(ball)
        realthrowTheBall(ball,p.clientY -5,p.clientX -5,500,10)

        //alert(p.clientX + '  ' + p.clientY)

    })
}


function throwTheBall(ball,y,x,parentHeight,ballHeight) {
    ball.style.left = x
    let down = true
    let counter = y
    setInterval(() => {
        ball.style.top=counter + 'px'
        if (down) {
            counter++
        } else {
            counter--
            
        }
        if (counter == parentHeight - ballHeight) {
            down = false
        }
        if (counter == 0) {
            down  = true
        }
        
    }, 10);
}
    function realthrowTheBall(ball,y,x,parentHeight,ballHeight) {
        ball.style.left = x
        let down = true
         let counter = y
         let maxHeight = y
         let inerv = setInterval(() => {
             ball.style.top = counter +'px'
             if(down){
                 counter++
             }else{
                 counter--
             }
             if(counter==parentHeight - ballHeight){ 
                 down = false
                 maxHeight += 10
             }
             if (counter== maxHeight) {
                 down = true
             }
             if(parentHeight-ballHeight <maxHeight || counter < maxHeight){
                 clearInterval(inerv)
             }
             
         }, 1);



    }
    

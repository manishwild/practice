window.onload = function () {
    let canvas = document.querySelector('#gameCanvas')
    let scorSpn = document.querySelector('#scorSpn')
    let ctx = canvas.getContext('2d')
    //draw a horizintal line
    ctx.moveTo(0,100)
    ctx.lineTo(600,100)
    
    ctx.stroke()
    //ctx.fillRect(580,79,20,20)
    let boxCounter = 580
    // let boxInterval = setInterval(() => {
    //     ctx.clearRect(boxCounter+20,79,20,20 )
    //     ctx.fillRect(boxCounter,79,20,20)
    //     if (boxCounter == 0) {
    //         boxCounter = 580
    //     } else {
    //         boxCounter = boxCounter - 20
    //     }
    // }, 100);
    let boxMoveCheck = true
    let boxMoveTime = 100
    function boxMove() {
        ctx.clearRect(boxCounter+20,79,20,20 )
        ctx.fillRect(boxCounter,79,20,20)
        if (boxCounter == 0) {
            boxCounter = 580
        } else {
            boxCounter = boxCounter - 20
        }
        if (boxMoveCheck) {
            setTimeout(() => {
                boxMove()
            }, boxMoveTime);
        }
        
    }
    boxMove()
    //draw the image line above the line in canvas starting from left
    let img = document.createElement('img')
    img.src= './imgs/player_big.png'
    img.onload = function (e) {
        //to show the full image
        //ctx.drawImage(img,0,39,480,60)
        // 10 charachter and the full width is 480 so each one width is 480/10 =48
        // ctx.drawImage(img,0,0,48,60,0,39,48,60)
        let frameCounter = 0
        let  scoreCounter= 0
        let charachterInterval = setInterval(() => {
            ctx.clearRect(0,0,48,99)
            if (status == 'running') {
                ctx.drawImage(img,frameCounter,0,48, 60,0,39,48,60)
            } else {
                ctx.drawImage(img,frameCounter,0,48, 60, 0,0,48,60)
            }
            if (frameCounter == 336) {
                frameCounter = 0
            } else {
                frameCounter = frameCounter +48
            }
            if (boxCounter <= 39 && status == 'running') {
                //clearInterval(boxInterval)
                boxMoveCheck=false 
                clearInterval(charachterInterval)
                //draw rext 'crash in canvas
                ctx.fillStyle ='red'
                ctx.font='60px ariel'
                ctx.fillText('!!!Crashed!!!',200,100)
            }
            if (boxCounter <= 39 && status == 'jumping') {
                scoreCounter++
                scorSpn.innerText = scoreCounter
                if (boxMoveTime > 50) {
                    boxMoveTime -= 10
                }
            }
        }, 150);
        let status = 'running'
        window.onkeypress =function (e) {
            console.log(e);
            if (e.key == " ") {
                status = 'jumping'
                setTimeout(() => {
                    status = 'running'
                }, 500);
            }
        }
     }

}
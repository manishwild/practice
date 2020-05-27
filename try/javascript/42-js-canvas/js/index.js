window.onload = function(){
    let canvas = document.querySelector('#canvas')
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = 'green'
    //draw a rectangle
    ctx.fillRect(250,50,200,200)
    ctx.beginPath()
    ctx.moveTo(350,50)
    ctx.lineTo(350,250)
    ctx.moveTo(250,150)
    ctx.lineTo(450,150)
    ctx.lineWidth = 15

    
    ctx.moveTo(90, 130)
    ctx.lineTo(95, 25)
    ctx.lineTo(150, 80)
    ctx.lineTo(205, 25)
    ctx.lineTo(210, 130)
    ctx.lineWidth = 7

    ctx.moveTo(200,200)
    ctx.quadraticCurveTo(0,0,200,300)

    ctx.font = "30px ariel"
    ctx.fillText("Hello World", 20, 20)


    ctx.stroke()
}
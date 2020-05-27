//task1 draw the dices image inside the canvas
window.onload = ()=>{
    const canvas = document.querySelector('#canvas')
    const grayScaleBtn = document.querySelector('#grayScaleBtn')
    //create context instance from canvas
    const ctx = canvas.getContext('2d')
    //create html image
    const img = document.createElement('img')
    img.setAttribute('src','./imgs/dices.png')
    //create onload events for img to add it inside the canvas after loading
    img.onload=()=>{
        ctx.drawImage(img,0,0,500,500)
    }
    grayScaleBtn.onclick= ()=>{
        
    }
}
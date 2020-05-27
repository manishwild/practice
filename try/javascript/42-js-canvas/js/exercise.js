let ourSale = [
    {month:1,sale:50000},
    {month:2,sale:20000},
    {month:3,sale:50000},
    {month:4,sale:120000},
    {month:5,sale:100000},
    {month:6,sale:95000},
    {month:7,sale:25000},
    {month:8,sale:75000},
    {month:9,sale:80000},
    {month:10,sale:5000},
    {month:11,sale:60000},
    {month:12,sale:100000}
]

window.onload = function () {
    //get Canvas catual size of X is 1*50(month) and Y 1/1000(sales)
    let chartCanvas = document.querySelector('#chartCanvas')
    let ctx = chartCanvas.getContext('2d')

    ctx.strokeStyle ='red'
    let startY =120
    let startX = 50
    ctx.moveTo(0,startY-(ourSale[0].sale/1000)+10)
    ctx.fillText(1,0,startY-(ourSale[0].sale/1000)+10)
    for (let i = 0; i < ourSale.length; i++) {

        let pointY=startY-(ourSale[i].sale/1000)
        let pointX = i * startX
        ctx.lineTo(pointX,pointY)
        ctx.fillText(i+1,pointX,pointY+10)
    }
    ctx.stroke()
    //context.moveTo(0, 120)
    // context.fillText("ja", 0, 120)
    // context.fillText("Fe", 50, 120)
    // context.fillText("Ma", 100, 120)

}
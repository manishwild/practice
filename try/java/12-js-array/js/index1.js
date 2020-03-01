function findLimits(blaArr) {
    let theSmallest =blaArr[0]
    let theGreatest = blaArr[0]
    for (let i = 1; i < blaArr.length; i++) {
        
        if (blaArr[i] <= theSmallest) {
            theSmallest = blaArr[i]
            
        }
        if (blaArr[i] > theGreatest ) {
            theGreatest  = blaArr[i]
        }
        document.write('the smallest: ' + theSmallest + '<br>')
document.write('the greatest: ' + theGreatest + '<br>')
        document.write(theSmallest+','+theGreatest+'<br>')
    }

}
findLimits([2,6,8,9,10])

function avr(blaArr){
    let sum = 0
    for (let i = 0; i < blaArr.length; i++) {
        sum += blaArr[i]
        
    }
    return sum / blaArr.length
}
document.write(avr([100,60,50,80]))
let arr = [2,-2,6,3,4]
let newArr =[]
arr.forEach(function (num) {
    newArr.push(num * 2)
})
document.write(arr+'<br>')
document.write(newArr+'<br>')

let someFunc = function (param) {
    return param + 2}
    let newArr2 = arr.map(someFunc)
    document.write(newArr2+'<br>')

    // let blaArr = []
    // arr.forEach(element => {
    //     if (element > 0) {
    //         blaArr.push(element)
    //     }
    // });
    let blaArr=arr.filter(item =>{return item > 0 && item < 4})
    document.write(blaArr+'<br>')
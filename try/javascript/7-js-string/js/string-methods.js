let x = "hello world"
let len = x.length
console.log(len)
console.log("///////////////////////////////")
let idx = x.indexOf("l",4)
console.log(idx)

let lidx = x.lastIndexOf("l")
console.log(lidx)
console.log("///////////////////////////////")

indexsFinder("hakunana matata","m",0)

function indexsFinder(txt,chr,start) {
    if (start < txt.length) {
        let idx = txt.indexOf(chr,start)
        if (idx != -1) {
            console.log(idx)
            indexsFinder(txt,chr,idx + 1)
        }
    }
    
}
console.log("///////////////////////////////")
function textAdd(num) {
    if (num == 0) {
        return num
    } else {
        return textAdd(num - 1) + "," + num
    }
}
console.log(textAdd(9))
console.log("///////////////////////////////")

let arrowTextAdd = num => {
    if (num == 0) {
        return num
    } else {
        return arrowTextAdd(num - 1) + "," +num
    }
}
console.log(arrowTextAdd(3))

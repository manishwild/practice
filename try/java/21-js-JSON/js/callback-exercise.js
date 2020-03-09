function funWithdelay(num,cb) {
    setTimeout(()=> {
        cb(num * 2)
    },2000)
}
funWithdelay(5,callBack)
function callBack(par) {
    console.log (par)
}
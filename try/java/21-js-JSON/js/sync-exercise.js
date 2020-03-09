function norrisJoke(cb) {
    let nor = new XMLHttpRequest()
    nor.open('GET','https://api.chucknorris.io/jokes/random')
    nor.send()
    nor.onload=function () {
        if (nor.status == 200) {
            let result = JSON.parse(nor.response)
            cb(result.value)
        }
    }
}
norrisJoke(callBackFun)
function callBackFun(params) {
    console.log(params)
}
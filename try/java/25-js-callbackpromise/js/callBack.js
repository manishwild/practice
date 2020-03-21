function someFun(word,cb) {
    cb()
    console.log(word)
}
someFun('hi',() =>{
    console.log("i am callBack function")
})
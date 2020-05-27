//First Event is onload window
window.onload = function () {
    //anything you put here it will executed after the all document is loaded
    printboddy()
}
function printboddy() {
    console.log(document.body)
}
//The second important event click
function clickEventHandler(params) {
    alert('you are bad boy')
    console.log('very bad')
}
//The third important Event double click
function doubleClick() {
    alert("you dont study")
    console.log('you dont study')
}
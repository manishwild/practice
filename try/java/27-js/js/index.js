window.onload = function () {
    let obj = document.getElementById('div1')
    console.log(obj.innerHTML)
    obj.innerHtml = '<span style = "font-size:70px">FBW5</span>'

    let fbwdiv = document.getElementById('FbwDiv')
    for (let i = 100; i > 0; i--) {
        fbwdiv.innerHTML += '<span style = "font-size:'+i+'px">FBW5</span><br>'
        
    }
}
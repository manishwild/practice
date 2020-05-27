let someText='9kR'
let regex = new RegExp(/^\d[a-z][A-z]/)
console.log(regex.test(someText));

let someText1='8 F4'
let regex1 = new RegExp(/^\d\s[A-Z]\d/)
console.log(regex1.test(someText1));

let someText2='manis@yahoo.cok'
let regex2 = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
console.log(regex2.test(someText2));

let someText3='+49 17566663654'
let regex3 = new RegExp(/^\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/)
console.log(regex3.test(someText3));

window.onload = function () {
    let inp1 = document.querySelector('#inp1')
    let btn1 = document.querySelector('#btn1')
    btn1.addEventListener('click', function(){
        if(regex3.test(inp1.value)){
            inp1.classList.add('valid')
            inp1.classList.remove('invalid')
        } else{
            inp1.classList.remove('valid')
            inp1.classList.add('invalid')
        }
        // 6 task solution
        let inp2 = document.querySelector('#inp2')
        //let regex5 = new RegExp(/^www\.\w{2,}\.\w{2,}$/)
        let regex5 = new RegExp(/^www.[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?$/)
        if(regex5.test(inp2.value)){
            inp2.classList.add('valid')
            inp2.classList.remove('invalid')
        } else{
            inp2.classList.remove('valid')
            inp2.classList.add('invalid')
        }

        let inp3 = document.querySelector('#inp3')
        let regex4 = new RegExp(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/)
        if(regex4.test(inp3.value)){
            inp3.classList.add('valid')
            inp3.classList.remove('invalid')
        } else{
            inp3.classList.remove('valid')
            inp3.classList.add('invalid')
        }
    })
  }

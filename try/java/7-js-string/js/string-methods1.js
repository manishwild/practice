let str = 'hello world'
console.log(str.slice(6,11))
console.log('//////////////////////////////')

let findIndexsecond = txt => {
    return txt.indexOf(' ') + 1
}
console.log(findIndexsecond('blablabla bla'))
console.log('//////////////////////////////')

let findIndexThird = txt =>{
    return txt.indexOf(' ',findIndexsecond(txt)) + 1
}
console.log(findIndexThird('hello my name is manish'))
console.log('//////////////////////////////')

function getSecondWord(txt) {
    return txt.slice(findIndexsecond(txt),findIndexThird(txt) - 1)
}
console.log(getSecondWord('this is something diffrent'))

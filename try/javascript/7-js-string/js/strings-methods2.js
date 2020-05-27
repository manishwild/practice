let str = 'hello world'
console.log(str.slice(-11,-6))//substring like slice but does not except negative values
console.log(str.substring(0,5))
console.log('//////////////////////////////')
console.log(str.substr(6,3))
console.log('//////////////////////////////')
console.log(str.replace('o','x'))//replace only first found result
console.log('//////////////////////////////')
let str2 = 'i love life,i love programming, i love you'
console.log(str2.replace(/i /ig,'you '))
console.log('//////////////////////////////')
console.log(str.toUpperCase())
console.log(str.toLocaleLowerCase())
console.log(str.concat(' ',str2,' ddd ',' dsds'))
console.log('//////////////////////////////')
let str3 =' manish@manish-mani.com gshhs dhhd'
console.log(str3.trim())// trim will remove whitespaces from both sides od a string
console.log('//////////////////////////////')
console.log(str3.charAt(3))
console.log(str3.charCodeAt(0))
let fruits = ['Apple', 'banana', 'watermelon', 'grape', 'orange', 'cherry']
let blaValue = fruits.find(fruit => fruit.indexOf('a')> -1)
document.write(blaValue +'<br>')
document.write(typeof blaValue+ '<br>')

let blaValue1  = fruits.find(fruit => fruit.indexOf('a') == 2)
document.write(blaValue1+ '<br>')
document.write(typeof blaValue1+ '<br>')

document.write('///////////////<br>')
// (for of) will iterate over array Items
for (let item of fruits) {
    document.write(item+ '<br>')
}

document.write('///////////////<br>')
// (for in) will iterate over array indexes
for (let blaIdx in fruits) {
    document.write(blaIdx+ ':'+  fruits[blaIdx] +'<br>')
}
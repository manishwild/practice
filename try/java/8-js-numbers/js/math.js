let num1 = 2.4
let rounded = Math.round(num1) 
console.log(rounded)
console.log(typeof(rounded))

console.log(Math.PI)
let num2 = Math.sqrt(9)
console.log(num2)
console.log(Math.random())
console.log(Math.random()*2)

function check() {
    let num = Math.round(Math.random()*4)
    switch (num) {
        case 0:
            return "you are nothing"
            break;
        case 1:
            return 'you are Unique'
            break;
        case 2:
            return 'if there is two of you,the world will be destroed'
            break;
        case 3:
            return 'you are happy' 
            break;
        case 4:
            return 'you are hungry'
            break;               
    
        default:
            return 'we dont have this option'
            break;
    }
}
console.log(check())

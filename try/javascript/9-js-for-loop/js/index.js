for (let i = 0; i < 10; i++) {
    console.log(i)
}

let storage = ''
for (let i = 0; i <= 10; i++) {
    storage = storage + i
    if(i !=10){
        storage = storage + ','
    }
    
}
console.log(storage)
console.log('//////////////////////////////////////////')
for (let i = 0; i < 10; i+=2) {
    console.log(i)
}
console.log('//////////////////////////////////////////')
for (let e = 3; e < 50; e+=2) {
    console.log(e)
}
console.log('//////////////////////////////////////////')
for (let i = 0; i < 50; i++) {
    if (i%2!=0) {
        console.log(i)
    }
    
}
console.log('//////////////////////////////////////////')
for (let i = 10; i >= 0; i-=2) {
    console.log(i)
    
}
console.log('//////////////////////////////////////////')
let sum = 0
for (let i = 0; i <= 50; i++) {
    sum += i
}
console.log(sum)
console.log('//////////////////////////////////////////')
for (let i = 0; i <= 10; i++) {
    for (let x = 0; x <= 10; x++) {
        document.write(x + '<br>')
        
    }
    document.write('again  <br>')
}
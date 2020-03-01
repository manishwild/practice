let fruits = ['Banana','Apple','watermelon']
// for (let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i]+'<br>')
    
// }
let check = false
fruits.forEach((blaFruit) =>{
    //document.write(blaFruit +'<br>')
    if (blaFruit.indexOf('water')!= -1) {
        check = true
    }
})
//document.write(check)
function counterForeach(arr,num) {
    let stor = 0
    arr.forEach(element => {
        if (element == num) {
            stor++
        }
    });
    return stor
}
let ourAraay=[1,5,5,6,1,5,7,8,-1]
document.write(counterForeach(ourAraay,1)+'<br>')

function counterFor(arr,num) {
    let stor = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==num) {
            stor++
        }
        return stor
    }
}
document.write(counterFor(ourAraay,5))

let ourClass=['Ahmad',
  "Tim",'Safa',
  'Shirin','Wael',
  'Alen',
  'Abdulrahman',
  'Hamoud',
  'Felix',
  'Nada',
  'Manish',
  'shumky',
  'Bashar']
  function charachterfind(arr,char) {
    let stor=0
    arr.forEach(item=>{
        if(item.indexOf(char.toLowerCase())!= -1 ||
         item.indexOf(char.toUpperCase())!= -1)
        stor++
    }
        )
        return stor
}
document.write(charachterfind(ourClass,'a'))
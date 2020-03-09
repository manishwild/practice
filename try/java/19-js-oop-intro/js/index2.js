class Participant{
    constructor(blalastName,blaFirstName){
        this.firstName = blaFirstName
        this.lastName = blalastName
    }
    fullName(){
        return this.firstName + ' - ' + this.lastName
    }
}

let manish = new Participant('Shahi','Manish')
manish.pierced = true
document.write(manish.fullName()+'<br>')

let preety = new Participant('Shrestha','Preety')
document.write(preety.fullName()+'<br>')

let preetish = new Participant('Shahi','Preetish')
document.write(preetish.fullName()+'<br>')

let mani = new Participant('Khadgi','Mani')
document.write(mani.fullName()+'<br>')

let nepal = [manish,preety,preetish,mani]
// arraynepal.forEach(element => {
//     document.write(element.firstName+'<br>')
// });//function to print first name of each element inside parrarr
//where those Items lasrNames contain a certain character as a paremeter
function firstNameall(array) {
    array.forEach(element => {
        document.write(element.firstName+' '+ element.pierced + '<br>')
    });
}
firstNameall(nepal)

//second solution return a storage
function firstNameall1(array) {
    let storage = ''
    array.forEach(element => {
        storage += element.firstName + '<br>'
    });
    return storage
}
document.write(firstNameall1(nepal))

//write a function return an array which contains items from nepal
//where those items lastNames contain a certain charachter as a parameter
//solution hard way
function hardFunc(arr,chr) {
    let resultArr = []
    arr.forEach(element => {
        if (element.lastName.indexOf(chr)>-1) {
            resultArr.push(element)
        }
    });
    return resultArr
}
console.log(hardFunc(nepal,'K'))

// solution with easy way
function easyWay(arr,chr) {
    return arr.filter(item => item.lastName.indexOf(chr)> -1)
}
console.log(easyWay(nepal,'t'))
document.write( '//////////////////////<br>')
document.write(nepal+'<br>')
document.write( '//////////////////////<br>')
easyWay(nepal,'K').forEach(blaItem =>{
    document.write(blaItem.firstName+'<br>')
})
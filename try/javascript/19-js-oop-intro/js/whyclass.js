let manish = {
    firstName:'Manish',
    lastName:'Shahi',
    fullName:function () {
        return this.firstName + ' - '+ this.lastName

    },
    pierced:true
}
let preety = {
    firstName:'Preety',
    lastName:'Shrestha',
    fullName:function () {
        return this.firstName + ' - '+ this.lastName

    },
    beautiful:true
}
let preetish = {
    firstName:'Preetish',
    lastName:'Shahi',
    fullName:function () {
        return this.firstName + ' - '+ this.lastName

    },
    handsome:true
}
let mani = {
    firstName:'Mani',
    lastName:'khadgi',
    fullName:function () {
        return this.firstName + ' - '+ this.lastName

    },
    short:false
}
document.write(manish.fullName()+'<br>')
document.write(preety.fullName()+'<br>')
document.write(preetish.fullName()+'<br>')
document.write(mani.fullName()+'<br>')

let nepal = [manish,preety,preetish,mani]
//function to print name of each element inside nepal
//first solution direct print
function direct(array) {
    array.forEach(element => {
        document.write(element.firstName+' '+element.short+'<br>')
    });
}
direct(nepal)

//second solution return a storage
function storage(array) {
    let stor = ''
    array.forEach(element => {
        stor += element.firstName+'<br>'
    });
    return stor
}
document.write(storage(nepal))
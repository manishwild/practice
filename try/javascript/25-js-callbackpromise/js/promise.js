let study2hours = true
let promis = new Promise((resolve,reject)=>{
    if (study2hours) {
        resolve('you will be a developer')
    } else {
        reject('dont know')
    }
})
promis.then(message =>{
    console.log(message)
}).catch(error =>{
    console.log(error)
})
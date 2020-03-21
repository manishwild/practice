let grade = 65
let stop1year =true

let promise = new Promise((resolve,reject)=>{
    if (grade >=60) {
        resolve('yu will be Software engineer')
    } else {
        reject('you will be a software engineer assaitant')

    }
})
let promise1 = new Promise((resolve,reject)=>{
    if (stop1year) {
        resolve(true)
    } else {
        reject(false)
    }
})

promise.then(message =>{

    promise1.then(()=>{
        console.log('you stop one year so you are assistant now')
    }).catch(()=>{
        console.log(message)
    })
}).catch(errormsg =>{

    promise1.then(()=>{
        console.log('you stoped one year so you need study again')

    }).catch(()=>{
        console.log(errormsg)
    })
})

async function person(){
    let message = await promise
    let stop = await promise1
    console.log(message)
    console.log(stop)
}
person()
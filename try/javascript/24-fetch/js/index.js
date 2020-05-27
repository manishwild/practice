//get data using promise call
let getData1 = fetch('/data.json')
getData1.then(response=>{
if(response.status == 200) {
    let dataPromise = response.json()
    dataPromise.then(data=>{
        console.log(data)
    }).catch(error=>{
        console.log(error)
    })
} else{
    console.log('there were errors in getting data')
}
}).catch(error =>{
    console.log(error)
})

async function get() {
    let response = await fetch('/data.json')
    let data = await response.text()
    console.log(data)
}
get
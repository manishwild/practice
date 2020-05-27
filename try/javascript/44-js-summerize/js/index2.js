//task1 on save button username and email values shoul be save inside local storage Key
window.onload = ()=>{
    const username = document.querySelector('#username')
    const email = document.querySelector('#email')
    const btn = document.querySelector('#btn')
    btn.onclick=()=>{
        //create a object with properties from inputs value
        const obj = {
            name:username.value,
            mail:email.value
        }
        localStorage.setItem('saveData',JSON.stringify(obj))

    }
    //task 2 fill the inputs with data inside the local storage if exist
    const jsonStor = localStorage.getItem('saveData')
    if(jsonStor != null){
    let obj1 = JSON.parse(jsonStor)
    username.value =obj1.name
    email.value= obj1.mail
}
}
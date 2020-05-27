window.onload = function (){
    //get the html element
    let nameInput = document.querySelector('#nameInput')
    let birthInput = document.querySelector('#birthInput')
    let abouttext = document.querySelector('#aboutText')

    //get data from local storage
    let meJson = localStorage.getItem('saveData')//check data is not empty
    if(meJson != null){
        let meObj =JSON.parse(meJson)
        nameInput.value = meObj.name
        birthInput.value = meObj.abouttext
    }
    document.querySelector('#saveForm').addEventListener('click',function(){
        let me = {
            name:nameInput.value,
            birthday:birthInput.value,
            aboutme:abouttext.value
        }
        localStorage.setItem('saveData',JSON.stringify(me))
    })


}
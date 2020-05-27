window.onload = function(){
    let lastCheckDate = localStorage.getItem('countDate')
    console.log(lastCheckDate)
    if(lastCheckDate){
        this.document.querySelector('#countViewElement').innerText = lastCheckDate
    }
}
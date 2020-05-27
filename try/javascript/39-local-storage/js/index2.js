window.onload =function(){
    let counterElement = document.querySelector('#counterElement')
    let localStoredCounter = localStorage.getItem('browseCount')
    if(localStoredCounter != null){
        // let counter = parseInt(localStoredCounter)
        // counterElement.innerText = counter
        // counter++
        // localStorage.setItem('browseCount',counter)
        // or with less line
        counterElement.innerText = localStoredCounter
        localStorage.setItem('browseCount',parseInt(localStoredCounter)+1)
    }else{
        localStorage.setItem('browseCount',1)
        counterElement.innerText = 0
    }



}

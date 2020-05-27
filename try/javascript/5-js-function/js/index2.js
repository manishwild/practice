function isEven(num){
    if (num % 2 == 0) {
        return true
        
    }else{
        return false
    }
}

function checkNumber(num) {
    if (isEven(num)) {
        console.log("it is even Number")

    }else{
        console.log("it is Odd number")
    }
    
}
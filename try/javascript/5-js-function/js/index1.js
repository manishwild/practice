function calc(opt,num1,num2) {
    switch (opt) {
        case "+":
            return num1 + num2
            break;
        case "-":
            return num1 - num2
            break;
        case "*":
            return num1 * num2
            break;
        case "/" :
            return num1 / num2
            break;           
    
        default:
            return "it is not valid operation"
            break;
    }
    
}console.log(calc("*",6,2))
class User {
    #privatePassword
    constructor(fName, lName, email, password){
        this.email = email;
        this.fName = fName;
        this.lName = lName;
        this.#privatePassword = password;       
    }
    
    set password(value){
        console.log('you cannot chanhe the password from here, you need to use change /changePassword/method');
    }
    get password(){
        return this.#privatePassword
    }
    fullName(){
        return this.fName + ' ' + this.lName
    }

    changePassword(newPassword){
        this.#privatePassword = newPassword
    }
    static description(){
        return 'I am a static method '
    }

}

let someUser = new User('Manish','Shahi','manis@manis.com','12345678')
let someUser1 = new User('Man','Man','man2man.co','647852')

// add new method to the user which gonna reflect on all object thst have been created from this class
User.prototype.checkUser = function (email){ 
    if (email === this.email && password === this.password) {
        return true
    } else {
        return false
    }
}

//**Static method */
// let someUser = {
//     email:'manis@manis.com',
//     fName:'Manish',
//     lName:'shahi',
//     password:'12345678',
//     fullName:function(){
//         return this.fName + ' ' + this.lName
//     }
// }

//override fullname method from class user and also it will reflect on all object that have created from this class
User.prototype.fullName = function() {
    return 'I am ' + this.fName + ' ' + this.lName
}

console.log(someUser.fullName());
//console.log(someUser.checkUser('ttt','tttt'));

class Employee extends User {
    constructor(fName, lName, email, password, officeNum , department){
        //we must call the constructor of the parents using super
        //basically copy of constructor inhert the parent class
        super(fName,lName,email,password)
        this.officeNum = officeNum
        this.department = department
    }
    showDetails(){
        return `I am a employee and my name is ${this.fName}, and I am working in ${this.department}`
    }
    static EmployeeDescription(){
        return 'This is employee static'
    }
}
const someEmployee = new Employee('Manish', 'shahi', 'man@man.com', '12345', 'fbw5', 'fbw5 class')
console.log(someEmployee.fullName());
console.log(someEmployee.showDetails());

// User.prototype.changePassword = function(newPassword){
//       this.#privatePassword = newPassword
// }
someEmployee.changePassword('asdasas')
someEmployee.password = 'asdasas'
console.log(someEmployee.password);
console.log(User.description());
console.log(Employee.EmployeeDescription());

let user1 = new User('user1','luser1','dsfdsdsf@dsdfs.com','12345')
let user2 = new User('user1','luser1','dsfdsdsf@dsdfs.com','12345')
//let user3 = user1
let user3 = {...user1}
user1.lName = 'bla'
console.log(user3.lName);
if (user1 === user3) {
    console.log('equal');
} else {
    console.log('not equal');
}
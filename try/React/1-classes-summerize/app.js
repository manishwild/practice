//First name always should be capita latter it is a stand procedure
class Auto{
    constructor(seatNum, maxSpeed, color){
        this.seat = seatNum
        this.speed = maxSpeed
        this.color = color
    }
    wheels = 4
    showDescription = function () {
        console.log(`This auto contains ${this.seat} and its max speed is ${this.speed}`);
    }
    static showGenerealDescription() {
        console.log('this is Auto os it has wheels and you can drive it');
    }
}

let car1 = new Auto(5, 250, 'Red')
let car2 = new Auto(8, 220, 'blue')
let car3 = {
    seat:9,
    speed:280,
    color:'blue'
}
car2.wheels = 6
console.log(car2.showDescription());
//car2.showDescription()
//car1.showGenerealDescription()

class User {
    constructor(fname, lname, email, address, role){
        this.fname = fname
        this.lname = lname
        this.email = email
        this.address = address
        this.role = role
    }
}

class UserRole {
    constructor(rolename, privelage) {
        this.rolename = rolename
        this.privelage = privelage
    }
    static getAdminrole(){
        return new UserRole('Admin',['Add Teacher', 'Delete Teacher', 'Edit Teacher', 'Add Student', 'Delete student','Edit Student'])
    }
    static getTeacherRole(){
        return new UserRole('Teacher',['Add Student','Delete Student', 'Edit Student'])
    }
    static getStudentRole(){
        return new UserRole('Student',['View Course'])
    }
}

const Manish = new User('Manish','shahi','man@man.com','kool',UserRole.getAdminrole())
console.log(Manish);
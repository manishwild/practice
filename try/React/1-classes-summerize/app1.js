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
//extends is a method that will give property of other class
class Truck extends Auto{
    constructor(seatNum, maxSpeed, color, weight, height){
        // call the constructor of parent class
        super(seatNum, maxSpeed, color);
        this.weight;
        this.height
    }
}

class MyString extends String {
    constructor(value){
        super(value);
        this.value = this.value
    }
    log = function () {
        console.log(this.value);
    }
}

const someTruck = new Truck(2,242,'Green',7550,3)
//console.log(someTruck);
//we cannot copy object to new object like the following
const anotherTruck = {...someTruck}
someTruck.speed = 260
anotherTruck.showDescription()
console.log(anotherTruck.speed);
//const name = new MyString('manish')
//console.log(name.toUpperCase());
//name.log()
let x = 5
let c = x
x = 9
console.log(x);
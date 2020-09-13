const arr = [1,2,3,6,4,8,12,15]
console.log(arr);
const arr2 = [...arr]
arr[2] = 5
console.log(arr2);

class Auto {
    constructor(seatNum, maxSpeeed, color) {
        this.seat = seatNum;
        this.speed = maxSpeeed;
        this.color = color;

    }
    
    showDescription = function () {
        console.log(`this auto contains ${this.seat} and its max speed is ${this.speed}`);
    }
    static showGeneralDescription() {
        console.log('this is auto so it has wheels and u can drive it');
    }

}

const newAuto = new Auto(4,280,"Red")
const anotherAuto = new Auto(5,250,'Green')
//add new proprety
newAuto.doors = 2
//overwrite a method in Auto class
Auto.prototype.showDescription = function () {
    console.log(`I am a new auto with ${this.speed} and i am ${this.color}`);
}
//add new method to auto class
Auto.prototype.newDescription = function () {
    console.log(`I am a new auto with ${this.speed} and i am this ${this.color}`);
}
console.log(newAuto);
anotherAuto.newDescription()
anotherAuto.showDescription()

String.prototype.fbw5 = function () {
    console.log('Fbw5');
}
String.prototype.replace = function (x,z) {
    console.log('Repalce is not working anymore');
}
"i am string".fbw5()
"i am string".replace('f','d')
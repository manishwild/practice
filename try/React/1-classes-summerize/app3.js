class Auto{
    //private property which is only accessible the class before it was @
    #privateSeats
    constructor(seatNum, maxSpeed, color){
        this.#privateSeats = seatNum
        this.speed = maxSpeed
        this.color = color
    }
    set seats(value){
        console.log('hey you cannot change the seats for the auto');
        //this.#privateSeats = value
    }
    get seats(){
        return this.#privateSeats
    }
    showDescription = function () {
        console.log(`This auto contains ${this.seat} and its max speed is ${this.speed}`);
    }
    static showGenerealDescription() {
        console.log('this is Auto so it has wheels and you can drive it');
    }
}
const newAuto = new Auto(4,280,'red')
//try to set a property
newAuto.seats = 6
// try to get
console.log(newAuto.seats);

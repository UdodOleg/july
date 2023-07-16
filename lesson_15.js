class Person{
    #firstname;
    #lastname;
    constructor(firstname,lastname) {
        this.#firstname=firstname;
        this.#lastname=lastname;
    }
    fullname() {
        return `${this.#firstname} ${this.#lastname}`;
    }
}
const Person1 = new Person('Oleg','Udod');
const Person2 = new Person('William','Brade');

console.log(Person1.fullname());
console.log(Person2.fullname());

//inheritance
class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}
class MotorCycle extends Vehicle{
    constructor(color,currentSpeed,maxSpeed,fuel){
        super(color,currentSpeed,maxSpeed);
        this.fuel = fuel;
    }
    doWheelie() {
        console.log('Driving on 1 wheel');
    }
}
const moto = new MotorCycle('Black',0,250,"gasoline");
console.table(moto);
moto.accelerate(50);
console.table(moto);

//prototypes
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("Hi there!");
    }
}
Person.prototype.introduce = function () {
    console.log("Hi, I'm", this.firstname);
};
Person.prototype.favoriteColor = "green";
let p = new Person("Maria", "Saga");
console.log(p.favoriteColor);
p.introduce();
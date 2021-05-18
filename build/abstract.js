"use strict";
//abstract tidak bisa di instantiate langsung untuk di akses
//abstract harus di buat sub class dulu baru bisa di akses
class Vehicle {
    start() {
        console.log("bruuuuum");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
let car = new Car();
console.log(car.wheels);
car.start();
class Motor extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let motor = new Motor();
console.log(motor.wheels);
motor.start();

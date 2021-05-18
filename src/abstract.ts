//abstract tidak bisa di instantiate langsung untuk di akses
//abstract harus di buat sub class dulu baru bisa di akses

abstract class Vehicle {
    abstract wheels :number
    start(): void {
        console.log("bruuuuum")
    }
}

class Car extends Vehicle {
    wheels: number = 4
}

let car = new Car()
console.log(car.wheels);
car.start()



class Motor extends Vehicle {
    wheels:number = 2    
}

let motor = new Motor()
console.log(motor.wheels);
motor.start()

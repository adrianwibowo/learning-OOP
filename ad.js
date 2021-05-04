class CoffeeMachine {
    // ...

    constructor(power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }

}



let coffeeMachine = new CoffeeMachine(100);

console.log(`Power is: ${coffeeMachine.power}W`); // Power is: 100W

coffeeMachine._power = 25;
console.log(coffeeMachine.power);
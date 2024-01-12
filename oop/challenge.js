class Car{
    speed = 0;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    accelerate() {
        this.speed += 10;
        console.log(`Speed is ${this.speed}`);
        return this;
    }
    brake() {
        this.brake -= 10;
    }
}

class EVCL extends Car{
    #charge = 40;
    constructor(make, model, range, battery) {
        super(make, model);
        this.range = range;
        this.battery = battery;
    }
    chargeBattery() {
        this.#charge += 50;
        console.log(`Battery: ${this.#charge}`);
    }
}

const tesla = new EVCL(2024, 'truch', 540, 1000);
tesla.accelerate().chargeBattery();
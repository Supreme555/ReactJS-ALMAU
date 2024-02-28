// // Task 1
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`New speed: ${this.make} ${this.speed} km/h`);
}

Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`New speed: ${this.make} ${this.speed} km/h`);
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// car1.accelerate();
// car1.accelerate();
// car1.brake();

// car2.accelerate();
// car2.brake();
// car2.brake();

// // Task 2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedUS) {
    this.speed = speedUS * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`New speed: ${this.make} ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`New speed: ${this.make} ${this.speed} km/h`);
  }
}

// const car1 = new CarCl('BMW', 120);
// const car2 = new CarCl('Mercedes', 95);


// console.log(car1.speedUS);
// car1.speedUS = 50;
// console.log(car1.speed);

// car1.accelerate();
// car1.accelerate();
// car1.brake();

// car2.accelerate();
// car2.brake();
// car2.brake();

// Task 3
function EV(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
}

EV.prototype.accelerate = function() {
  this.speed += 20;
  this.charge -= 1;
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

// const ev1 = new EV('Tesla', 120, 23);
// ev1.chargeBattery(90);
// ev1.accelerate();
// ev1.accelerate();
// ev1.brake();

// Task 4
class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    return this;
  }
}

const ev1 = new EVCl('Rivian', 120, 23);
const ev2 = new EVCl('Tesla', 100, 30);
ev1.chargeBattery(90).accelerate().accelerate().brake();
ev2.chargeBattery(25).accelerate().accelerate().brake();

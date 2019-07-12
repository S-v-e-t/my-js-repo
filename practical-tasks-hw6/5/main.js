/*
* Добавь классу Car свойство цены автомобиля, назови его сам.
* Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
*/

class Car {
  constructor({
    maxSpeed = 0, speed = 0, running = false, distance = 0, price,
  }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.running = running;
    this.distance = distance;
    this._price = price;
  }

  turnOn() {
    this.running = true;
  }

  turnOff() {
    this.running = false;
  }

  accelerate(spd) {
    if (spd <= this.maxSpeed) { this.speed = spd; }
  }

  decelerate(spd) {
    if (spd <= this.maxSpeed && spd > 0) { this.speed = spd; }
  }

  drive(hours) {
    if (this.running = true)
    { this.distance = hours * this.speed; }
  }

  static getSpecs(carObj) {
    console.log('maxSpeed :', carObj.maxSpeed);
    console.log('speed :', carObj.speed);
    console.log('running :', carObj.running);
    console.log('distance :', carObj.distance);
  }

  get value() {
    return this._price;
  }

  set value(newPrice) {
    this._price = newPrice;
  }

}


const car = new Car({ maxSpeed: 50, price: 2000 });
console.log(car.value); // 2000

car.value = 4000;
console.log(car.value); // 4000

//  Добавь к классу Car из предыдущего задания статический
//  метод getSpecs, который принимает объект-машину как параметр
//  и выводит в консоль значения полей maxSpeed, speed, running и distance.

class Car {
  constructor({
    maxSpeed = 0, speed = 0, running = false, distance = 0,
  }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.running = running;
    this.distance = distance;
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

}

const car = new Car({ maxSpeed: 100 });
car.turnOn();
car.accelerate(50);
car.drive(2);

Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100

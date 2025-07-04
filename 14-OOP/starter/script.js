'use strict';

///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// function Car(speed) {
//   this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// }

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// }

// let car = new Car(10);
// console.dir(Car);
// console.dir(Car.prototype);
// car.accelerate();
// console.dir(Car);

// let car1 = new Car(10);
// let car2 = new Car(50);

// car1.accelerate();
// car2.accelerate();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/


function Car(make, speed) {
  this.speed = speed;
  this.make = make;
  console.log(this.make);
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
}

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(this.speed);
}

// class Car {
//   constructor(make, speed) {
//     // console.log(make, speed);
//     this.speed = speed;
//     this.make = make;
//   }

//   accerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }

//   break() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(currentSpeed) {
//     this.speed = currentSpeed * 1.6;
//   }
// };

// let ford = new Car(120);

// console.log(`Ford is going at ${ford.speed} km/h`);
// console.log(`Ford is going at ${ford.speedUS} mi/h`);

// ford.speedUS = 125;
// console.log(`Ford is set at ${ford.speed} mi/h`);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
function EV(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}


EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;

}
EV.prototype.constructor = EV;

let carEv = new EV("HONDA", 140, 22);
console.log(carEv);
// console.log(carEv.chargeBattery("pupa"));
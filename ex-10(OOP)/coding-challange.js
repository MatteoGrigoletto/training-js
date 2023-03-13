'use-strict'
// ex 1 


let Car = function(make,speed){
  this.make = make
  this.speed = speed
}
Car.prototype.accelerate = function(){
  // console.log(this.speed + 10); 
  return this.speed + 10
}
Car.prototype.brake = function(){
  // console.log(this.speed -5);
  return this.speed -5
}

let bmw = new Car('bmw',120)
let mercedes = new Car('mercedes',95)
// console.log(bmw, bmw.accelerate(),bmw.brake());
// console.log(mercedes);

// ex-2 
class person {
  constructor(name,age){
  this.name = name
  this.age = age
  }
  ageAndName(){
    return `${this.name} e ${this.age}`
  }
}
const franco = new person(`franco`, 20)
franco.__proto__.onlyName = function(){
  return this.name
}
// console.log(franco.__proto__ == person.prototype);
// console.log(person.__proto__.__proto__);
// console.log(document.__proto__);


// ex-3 

let Electric = function(make,speed) {
  Car.call(this,make,speed)
}
Electric.prototype = Object.create(Car.prototype)

Electric.prototype.charge = 50
Electric.prototype.chargeTo = function(energy){
  if(energy > 0 && energy <= 100)
  this.charge = energy
}
Electric.prototype.accelerate = function(){
  if(this.speed >= 200){
    this.charge-= 1
    console.log(`hai raggiunto la velocita massima di ${this.speed}, autonomia del ${this.charge}%`);
  }
  else{
    this.speed+=20
    this.charge-= 1
    console.log(`La tesla sta andando a ${this.speed} con una autonomia del ${this.charge}%`);
  }
}

// console.log(Electric.prototype);


const ev = new Electric('EV',200)

// console.log(ev.chargeTo(100));
// console.log(ev.charge);
// ev.accelerate();
// ev.accelerate();
// console.log(ev.brake());



// ex-4 

class CarlCl {
#brand;
  constructor(brand){
    this.#brand = brand
  } 
  nameBrand(){
    return this.brand
  }
}

class Macchine extends CarlCl{
  #charge;
  constructor(brand,make,speed,charge){
    super(brand)
    this.make = make
    this.speed = speed
    this.#charge = charge
  }
  accelerate(){
    this.speed += 20 
    this.#charge--
    return this
  }
  chargeBattery(energy){
    this.#charge+= energy
    return this
  }
}

let audi = new CarlCl('audi')
let s3 = new Macchine('ferrari','s3',200,80)
console.log(audi);
console.log(s3.accelerate().chargeBattery(20));
console.log(s3.nameBrand());
console.log(audi);



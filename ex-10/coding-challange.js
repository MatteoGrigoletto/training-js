'use-strict'

let Car = function(make,speed){
  this.make = make
  this.speed = speed
}
Car.prototype.accelerate = function(){
  console.log(this.speed + 10); 
  return this.speed + 10
}
Car.prototype.brake = function(){
  console.log(this.speed -5);
  return this.speed -5
}

let bmw = new Car('bmw',120)
let mercedes = new Car('mercedes',95)
console.log(bmw, bmw.accelerate(),bmw.brake());
console.log(mercedes);


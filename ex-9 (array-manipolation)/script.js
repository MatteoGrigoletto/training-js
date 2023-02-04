'use strict';
const arr = [200, -500, 500, 100, -400];

let number = arr.find(numb => numb < 0);
console.log(number);

const arr1 = [];
for (number of arr) {
  if (number < 0) {
    arr1.push(number);
  }
}
console.log(arr1[0]);

let a = {
  owner: 'matteo',
};
let b = {
  owner: 'giorgia',
};
let c = {
  owner: 'fede',
};
const arr2 = [a, b, c];
let d;
for (let obj of arr2) {
  if (obj.owner === 'giorgia') {
    d = obj;
  }
}
console.log(d);

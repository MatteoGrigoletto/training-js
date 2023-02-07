'use strict';
// metodo some e every iterano l'intero array e controllano se la condizione e' vera o falsa
// some al primo riscontro positivo ritorna true
// every invece solamente se tutti gli elementi soddisfano la condizione

// let arr = [34, 543, 45556, 756, 536367, -434, -43423];

// let bool = arr.some(elm => elm > 0);
// let bool1 = arr.every(elm => elm > 0 || elm < 0);
// console.log(bool, bool1);
// const arr = [200, -500, 500, 100, -400];

// let number = arr.find(numb => numb < 0);
// console.log(number);

// const arr1 = [];
// for (number of arr) {
//   if (number < 0) {
//     arr1.push(number);
//   }
// }
// console.log(arr1[0]);

// let a = {
//   owner: 'matteo',
// };
// let b = {
//   owner: 'giorgia',
// };
// let c = {
//   owner: 'fede',
// };
// const arr2 = [a, b, c];
// let d;
// for (let obj of arr2) {
//   if (obj.owner === 'giorgia') {
//     d = obj;
//   }
// }
// console.log(d);

// let a = Array.from({ length: 100 }, () => Math.round(Math.random() * 6));
// console.log(a);

// let b = a.reduce(
//   (cal, elm) => {
//     elm > 0 ? (cal.piu += elm) : (cal.meno += elm);
//     return cal;
//   },
//   {
//     piu: 0,
//     meno: 0,
//   }
// );

// console.log(b);

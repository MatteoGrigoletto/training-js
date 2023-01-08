'use strict';

// ------- ex -------
let arr = [6, 3, -1, -10, 10];
let arr1 = [54, 2, 4];

// let temp = function (arr, arr1) {
//   let concat = arr.concat(arr1);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < concat.length; i++) {
//     let date = concat[i];
//     if (date > max) {
//       max = date;
//     }
//     if (date < min) {
//       min = date;
//     }
//   }
//   return max - min;
// };
// temp(arr);
// console.log(temp(arr, arr1));

// ------ ex ---------
let str = function (arr) {
  let stringTemps = ``;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    stringTemps += `${temp} C in ${i + 1} days, `;
  }
  return stringTemps;
};
console.log(str(arr));

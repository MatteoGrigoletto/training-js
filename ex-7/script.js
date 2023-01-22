// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const [i, x, y] = restaurant.categories;
// console.log(i, x, y);

// const x = [1, 2, 3];
// console.log(x);
// const y = [...x];
// console.log(y);

// const [a, ...x] = restaurant.categories;
// console.log(x);

// const a = {
//   name: `ciao`,
//   surname: `miao`,
// };
// var bau = `ciao`;
// let ciao = function () {
//   return bau;
// };

// ciao();
// const b = {
//   name: `boh`,
// };

// b.miao = b.surname || 20;

// console.log(b);
// console.log(window.bau);
// let a = 0;
// let b = 20;

// let c = (a ||= 30);
// console.log(c);
//

// difference of array

// let arr = ['ciao', `ciao`, 'miao', `bau`];

// let oggetto = {
//   name: `matteo`,
//   cognome: `grigo`,
// };

// const nuovo = new Set(arr);
// console.log(nuovo);

// const nuovoOggetto = new Map(Object.entries(oggetto));

// console.log(nuovoOggetto);

// let a = 'ciao sono matteo tu come ti chiami? sono luca';

// console.log(a.replaceAll(`sono`, `io`));

// const maiuscola = function (name) {
//   let s = name.split(' ');
//   for (const n of s) {
//     let final = n.replace(n[0], n[0].toUpperCase());
//     console.log(final);
//   }
// };
// maiuscola(`matteo antonio luigi`);

// let change = function (number) {
//   number = String(number);
//   let cover = number.slice(number.length - 4).padStart(number.length, '*');
//   console.log(cover);
// };

// change(123456789101222);

// console.log(typeof (' ' + 2));

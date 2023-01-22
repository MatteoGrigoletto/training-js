// Coding Challenge #1
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function (...names) {
//     let totalPlayer = '';
//     let totalScore = 0;
//     names.forEach(player => {
//       if (this.scored.includes(player)) {
//         totalScore++;
//       }
//       totalPlayer += `${player},`;
//     });
//     return totalPlayer + `total score ${totalScore}`;
//   },
// };

// let [[gk, ...fieldPlayers]] = game.players;
// const {
//   players: [[...first], [...second]],
// } = game;

// let allPlayers = first + second;
// console.log(allPlayers);

// let players1Final = [...first, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// console.log(game.printGoals(...game.scored));

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// let win = team1 > team2 || `team 1 wins`;
// console.log(win);

// console.log(first, second);

// Coding Challenge #2

// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function (...names) {
//     let totalPlayer = '';
//     let totalScore = 0;
//     names.forEach(player => {
//       if (this.scored.includes(player)) {
//         totalScore++;
//       }
//       totalPlayer += `${player},`;
//     });
//     return totalPlayer + `total score ${totalScore}`;
//   },
// };

// for ([index, player] of game.scored.entries()) {
//   console.log(`Goal ${index + 1}: ${player}`);
// }

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
//   console.log(scorers);
// }

// console.log(`=======================`);

// coding interview

// Write a function that accepts a String as an argument.
// The string is supposed to be HTMLAllCollection, but all the div Elements are missing their closing tags
// The function is to find and clode all the divs in the string.
// The string should return the entire corrected string.

// const count = string => {
//   let divCounter = 0;
//   let unknowFour = '';
//   let fixedHTML = '';

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === '<') {
//       for (let j = 1; j < 5; j++) {
//         unknowFour += string[i + j];
//       }
//     }
//     if (unknowFour === 'div>') {
//       divCounter++;
//       if (divCounter % 2 === 0) {
//         fixedHTML += string[i] + '/';
//       }
//     } else {
//       fixedHTML += string[i];
//     }
//     unknowFour = '';
//   }
//   return fixedHTML;
// };

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase   ✅
// firstName        ✅✅
// someVariable     ✅✅✅
// calculateAge     ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//   const textValue = document.querySelector('textarea').value;
//   let str = textValue.toLowerCase();

//   let splitStr = str.split(' ');
//   let count = 0;
//   for (singleStr of splitStr) {
//     count++;
//     let removeIndex = singleStr.indexOf(`_`);
//     let remove = singleStr.replace(`_`, '');
//     let reverseString = remove.split('').reverse().join('');
//     let cammelString = reverseString.replace(
//       `${remove[removeIndex]}`,
//       `${remove[removeIndex]}`.toUpperCase()
//     );
//     let finalStr = cammelString.split('').reverse().join('');
//     console.log(`${finalStr.padEnd(20, ' ')} ${'✅'.repeat(count)}`);
//   }
// });

// function convertToCamelCase(varName) {
//   let camelCase = '';
//   let capitalizeNext = false;
//   for (let char of varName) {
//     if (char === '_') {
//       capitalizeNext = true;
//     } else if (capitalizeNext) {
//       camelCase += char.toUpperCase();
//       capitalizeNext = false;
//     } else {
//       camelCase += char;
//     }
//   }
//   return camelCase;
// }

// let testData = [
//   'underscore_case',
//   'first_name',
//   'Some_Variable',
//   'calculate_AGE',
//   'delayed_departure',
// ];

// testData.forEach(name => {
//   console.log(convertToCamelCase(name));
// });
// String Methods Practice

// ex manipolate sting
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
//   console.log(output);
// }

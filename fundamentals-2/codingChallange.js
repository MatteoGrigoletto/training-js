`use strict`;
/*
Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time


let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let avgDolphine = calcAverage(23, 34, 27);
let avgKoala = calcAverage(85, 54, 41);

let checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphines wins with ${avgDolphins} points`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas wins with ${avgKoalas} points`);
  } else {
    console.log(`No team won`);
  }
};

checkWinner(avgDolphine, avgKoala);

*/

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


Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44


let calcTip = function (arrBills, arrEmpty, arrTotal) {
  arrBills.forEach((element) => {
    let scount = 0;
    if (element >= 50 && element <= 300) {
      scount = (element / 100) * 15;
      arrEmpty.push(scount);
    } else {
      scount = (element / 100) * 20;
      arrEmpty.push(scount);
    }
    arrTotal.push(element + scount);
  });
  console.log(arrBills, arrEmpty, arrTotal);
  return arrTotal;
};
let bills = [125, 555, 44, 348, 333, 5555];
let tips = [];
let total = [];

console.log(calcTip(bills, tips, total));

*/

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


Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.

const persons = [
  {
    fullName: `mark`,
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      return (this.BMI = this.mass / (this.height ** 2));
    },
  },
  {
    fullName: `john`,
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      return (this.BMI = this.mass / (this.height ** 2));
    },
  },
];
console.log(persons[0].calcBMI(), persons[1].calcBMI());
if (persons[0].BMI > persons[1].BMI) {
  console.log(
    `${persons[0].fullName} BMI ${persons[0].BMI} is higher than ${persons[1].fullName} ${persons[1].BMI}`
  );
} else if (persons[1].BMI > persons[0].BMI) {
  console.log(
    `${persons[1].fullName} BMI ${persons[1].BMI} is higher than ${persons[0].fullName} ${persons[0].BMI}`
  );
}


Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! 


let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

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
  return arrTotal;
};

let calcAverage = function (arr) {
  let avgCount = 0;
  for (i = 0; i < arr.length; i++) {
    avgCount += arr[i];
    if (i == arr.length - 1) {
      avgCount = avgCount / arr.length;
    }
  }
  return avgCount;
};

console.log(calcTip(bills, tips, total), `avg: ${calcAverage(total)}`);

*/

console.log(`--------------coding challenge-----------`);
// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

function bmi(elmCompare, elm2) {
  let bmi1 = elmCompare.weight / elmCompare.tall ** 2;
  let bmi2 = elm2.weight / elm2.tall ** 2;
  if (bmi1 > bmi2) {
    return true;
  } else {
    return false;
  }
}

let mark = {
  weight: 78,
  tall: 1.69,
};
let john = {
  weight: 92,
  tall: 1.95,
};

let markHigherBMI = bmi(mark, john);
console.log("coding 1 => ", markHigherBMI);

// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

if (markHigherBMI === true) {
  console.log(`coding 2 =>`, `Mark's BMI is higher than John's`);
} else {
  console.log(`coding 2 =>`, `John's BMI is higher than Mark's`);
}

// Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

let teamDolphine = [96, 108, 89];
let teamKoalas = [88, 91, 110];
let pointsDolphine = 0;
let pointKoalas = 0;
for (let i = 0; i < teamDolphine.length; i++) {
  pointsDolphine = pointsDolphine + teamDolphine[i];
  pointKoalas += teamKoalas[i];
  if (i == teamDolphine.length - 1) {
    pointsDolphine /= 3;
    pointKoalas /= 3;
  }
}
console.log(pointsDolphine);
if (pointKoalas >= 100 || pointsDolphine >= 100) {
  if (pointKoalas > pointsDolphine) {
    console.log(`coding 3 =>`, `team Koalas wins`);
  } else if (pointKoalas < pointsDolphine) {
    console.log(`coding 3 =>`, `team Dolphine wins`);
  } else if (pointKoalas >= 100 && pointsDolphine >= 100) {
    console.log(`coding 3 =>`, `draw`);
  }
} else {
  console.log(
    `coding 3 =>`,
    `a score of 100 points is required. Actual scores: ${Math.round(
      pointsDolphine
    )}, ${Math.round(pointKoalas)}`
  );
}

// Coding Challenge #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”

let price = Number(prompt(`inserisci il prezzo del ristorante`));

let scount =
  price >= 50 && price <= 300 ? (price / 100) * 15 : (price / 100) * 20;

console.log(
  `coding 4 +>`,
  `The bill was ${price}, the tip was ${scount} and the total value is ${
    price + scount
  }`
);

/*

------------ex------------

let country = "italy";
let continent = "europe";
let population = 60;

console.log(`ex1 =>`, country, continent, population);

------------ex------------

let isIsland = true;
let language;
console.log(
  `ex2 =>`,
  typeof isIsland,
  typeof country,
  typeof continent,
  typeof population
);

------------ex------------

language = "italian";
const region = 20;

------------ex------------

population / 2;
population++;
let description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(`ex3 =>`, description1);

------------ex------------

let description2 = `${country} is in ${continent}, and  its ${population} million people speak ${language} `;
console.log(`ex4 =>`, description2);

------------ex------------

if (population > 33) {
  console.log(`ex5 =>`, `Portugal's population in above average`);
} else {
  console.log(`Portugal's population is 22 milion below average`);
}

------------ex------------

1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right

if (
  "9" - "5" == 4 &&
  "19" - "13" + "17" == "617" &&
  "19" - "13" + 17 == 23 &&
  "123" < 57 == false &&
  5 + 6 + "4" + 9 - 4 - 2 == 1143
) {
  console.log(`ex6 =>`, `ex correct`);
} else {
  console.log(`ex incorrect`);
}

------------ex------------

Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation

let numNeighbours = Number(
prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log(`ex 7 => `, "Only 1 border!");
} else if (numNeighbours > 1) {
  console.log(`ex 7 => `, "More than 1 border");
} else {
  console.log(`ex 7 => `, "No borders");
}

------------ex------------

1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)

let sarahRequirement = {
  stateLanguage: `english`,
  maxPopolation: 50,
  island: false,
};
let locations = {
  name: `italy`,
  popolation: 64,
  island: false,
};

function search(sarahRequirement, locations) {
  let response;
  if (
    sarahRequirement.maxPopolation > locations.popolation &&
    sarahRequirement.stateLanguage === locations.name &&
    sarahRequirement.island === locations.island
  ) {
    response = `'You should live in Italy :)'.`;
  } else {
    response = `Italy does not meet your criteria`;
  }
  return response;
}
let request = search(sarahRequirement, locations);
console.log(request); 

----------ex-----------------

Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'

let language = prompt(`inserisci una lingua`);

switch (language) {
  case `mandarin`:
    console.log(`most number of native speakers`);
    break;
  case `spanish`:
    console.log(`2nd place in number of native speakers`);
    break;
  case `english`:
    console.log(`3rd place`);
    break;
  case `hindi`:
    console.log(`number 4`);
    break;
  case `arabic`:
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(P`great language too`);
}

*/

`use strict`;

/*
----------- ex ------------

1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console


console.log(`ex 1:`);
let states = {
  country: `italy`,
  population: 60,
  capitalCity: `rome`,
};
function describeCountry(obj) {
  return `${obj.country} has ${obj.population} million people and its capital city is ${obj.capitalCity}`;
}

let response = describeCountry(states);
console.log(response);

---------- ex ---------

1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)]

console.log(`ex 2:`);

let populationsItaly = 60;
let populationsGermany = 83;
let populationsFrance = 66;

function percentageOfWorld1(population) {
  return (population / 8000) * 100;
}

let response = percentageOfWorld1(populationsItaly);
let response1 = percentageOfWorld1(populationsGermany);
let response2 = percentageOfWorld1(populationsFrance);
console.log(response, response1, response2);

let percentageOfWorld2 = function (population) {
  return (population / 8000) * 100;
};
let response3 = percentageOfWorld2(populationsItaly);
let response4 = percentageOfWorld2(populationsGermany);
let response5 = percentageOfWorld2(populationsFrance);
console.log(response3, response4, response5);

---------- ex ---------
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'

let populationsItaly = 60;
let percentageOfWorld3 = (population) => (population / 8000) * 100;

console.log(percentageOfWorld3(populationsItaly));


----------ex- --------

1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice

*/
let country = "italy";
let population = 60;
let percentageOfWorld3 = (population) => (population / 8000) * 100;

function describePopulation(country, population) {
  let percent = percentageOfWorld3(population);
  let response = `${country} has ${population} million people, which is about ${percent} of the word`;
  return response;
}
console.log(describePopulation(country, population));

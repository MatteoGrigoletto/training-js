'use strict';

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.

// let btn = document.querySelector('.poll');
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3 : C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     let info = prompt(`${this.question} ${this.options}`);
//     info > 3 || info < 0 ? null : this.answers[info]++;

//     this.displayResults(this.answers);
//   },
//   displayResults: function (type) {
//     console.log(type);
//   },
// };

// btn.addEventListener('click', poll.registerNewAnswer.bind(poll));
let body = document.querySelector('body');
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

'use strict';
// FIRST SOLUTION

// let newGame = document.querySelector('.btn--new');
// let roll = document.querySelector('.btn--roll');
// let hold = document.querySelector('.btn--hold');
// let sectionPlayer = document.querySelectorAll('.player');
// let imgDice = document.querySelector('.dice');

// let score1 = document.getElementById('score--0');
// let score2 = document.getElementById('score--1');
// score1.innerHTML = 0;
// score2.innerHTML = 0;
// roll.addEventListener('click', function () {
//   for (let i = 0; i < sectionPlayer.length; i++) {
//     let rdmNumber = Math.floor(Math.random() * 6) + 1;
//     let currentPoint = document.getElementById(`current--${i}`);
//     if (sectionPlayer[i].classList.contains('player--active')) {
//       imgDice.src = `/img/dice-${rdmNumber}.png`;
//       currentPoint.innerHTML = Number(currentPoint.innerHTML) + rdmNumber;
//     }
//     if (rdmNumber === 1) {
//       currentPoint.innerHTML = 0;
//       sectionPlayer[i].classList.remove('player--active');
//       i++;
//       if (i > 1) {
//         i = 0;
//       }
//       sectionPlayer[i].classList.add('player--active');
//     }
//   }
// });

// hold.addEventListener('click', function () {
//   if (sectionPlayer[0].classList.contains('player--active')) {
//     score1.innerHTML =
//       Number(score1.innerHTML) +
//       Number(document.getElementById('current--0').innerHTML);
//     sectionPlayer[0].classList.remove('player--active');
//     sectionPlayer[1].classList.add('player--active');
//   } else if (sectionPlayer[1].classList.contains('player--active')) {
//     score2.innerHTML =
//       Number(score2.innerHTML) +
//       Number(document.getElementById('current--1').innerHTML);
//     sectionPlayer[1].classList.remove('player--active');
//     sectionPlayer[0].classList.add('player--active');
//   }
//   document.getElementById('current--0').innerHTML = 0;
//   document.getElementById('current--1').innerHTML = 0;
//   if (score1.innerHTML >= 100) {
//     roll.innerHTML = `player 1 Wins`;
//   } else if (score2.innerHTML >= 100) {
//     roll.innerHTML = `player 2 Wins`;
//   }
// });

// newGame.addEventListener('click', function () {
//   location.reload();
// });

// SECOND CLEAN SOLUTION

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

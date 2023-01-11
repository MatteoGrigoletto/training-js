'use strict';
let newGame = document.querySelector('.btn--new');
let roll = document.querySelector('.btn--roll');
let hold = document.querySelector('.btn--hold');
let sectionPlayer = document.querySelectorAll('.player');
let imgDice = document.querySelector('.dice');

let score1 = document.getElementById('score--0');
let score2 = document.getElementById('score--1');
score1.innerHTML = 0;
score2.innerHTML = 0;
roll.addEventListener('click', function () {
  for (let i = 0; i < sectionPlayer.length; i++) {
    let rdmNumber = Math.floor(Math.random() * 6) + 1;
    let currentPoint = document.getElementById(`current--${i}`);
    if (sectionPlayer[i].classList.contains('player--active')) {
      imgDice.src = `/img/dice-${rdmNumber}.png`;
      currentPoint.innerHTML = Number(currentPoint.innerHTML) + rdmNumber;
    }
    if (rdmNumber === 1) {
      currentPoint.innerHTML = 0;
      sectionPlayer[i].classList.remove('player--active');
      i++;
      if (i > 1) {
        i = 0;
      }
      sectionPlayer[i].classList.add('player--active');
    }
  }
});

hold.addEventListener('click', function () {
  if (sectionPlayer[0].classList.contains('player--active')) {
    score1.innerHTML =
      Number(score1.innerHTML) +
      Number(document.getElementById('current--0').innerHTML);
    sectionPlayer[0].classList.remove('player--active');
    sectionPlayer[1].classList.add('player--active');
  } else if (sectionPlayer[1].classList.contains('player--active')) {
    score2.innerHTML =
      Number(score2.innerHTML) +
      Number(document.getElementById('current--1').innerHTML);
    sectionPlayer[1].classList.remove('player--active');
    sectionPlayer[0].classList.add('player--active');
  }
  document.getElementById('current--0').innerHTML = 0;
  document.getElementById('current--1').innerHTML = 0;
  if (score1.innerHTML >= 10) {
    roll.innerHTML = `player 1 Wins`;
  } else if (score2.innerHTML >= 10) {
    roll.innerHTML = `player 2 Wins`;
  }
});

newGame.addEventListener('click', function () {
  location.reload();
});

'use strict';

let btnModal = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let btnCloseModal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');

for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener('click', function () {
    first.classList.remove('hidden');
    second.classList.remove('hidden');
    third.classList.remove('hidden');

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    if (btnModal[i].innerHTML == `Show modal 1`) {
      second.classList.add('hidden');
      third.classList.add('hidden');
    } else if (btnModal[i].innerHTML == `Show modal 2`) {
      first.classList.add('hidden');
      third.classList.add('hidden');
    } else if (btnModal[i].innerHTML == `Show modal 3`) {
      first.classList.add('hidden');
      second.classList.add('hidden');
    }
  });
  btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  overlay.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
}

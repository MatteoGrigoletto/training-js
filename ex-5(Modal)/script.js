'use strict';

let btnModal = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let btnCloseModal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
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

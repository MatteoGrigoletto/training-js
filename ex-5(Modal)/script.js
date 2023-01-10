'use strict';

let btnModal = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let btnCloseModal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');

let hidden = function (variable) {
  variable.classList.add('hidden');
};

let removeHidden = function (variable) {
  variable.classList.remove('hidden');
};

for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener('click', function () {
    removeHidden(first);
    removeHidden(second);
    removeHidden(third);
    removeHidden(modal);
    removeHidden(overlay);

    if (btnModal[i].innerHTML == `Show modal 1`) {
      hidden(second);
      hidden(third);
    } else if (btnModal[i].innerHTML == `Show modal 2`) {
      hidden(first);
      hidden(third);
    } else if (btnModal[i].innerHTML == `Show modal 3`) {
      hidden(first);
      hidden(second);
    }
  });
  btnCloseModal.addEventListener('click', function () {
    hidden(modal);
    hidden(overlay);
  });
  overlay.addEventListener('click', function () {
    hidden(modal);
    hidden(overlay);
  });
}
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape') {
    hidden(modal);
    hidden(overlay);
  }
});

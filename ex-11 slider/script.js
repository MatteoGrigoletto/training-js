'use strict';
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const PointContainer = document.querySelector('.pointer-container');

let currentSlide = 0;
const numberSlide = slides.length;

// funzione che permette di traslare le slide tramite l'indice fornito
// dalla variabile globale currentSlide
// ***sono stati usati selettori css!! ***

const sliderMove = function (slide) {
  slides.forEach(
    (sli, index) =>
      (sli.style.transform = `translateX(${100 * (index - slide)}%)`)
  );
};

// logica cambio slide

const nextSlide = function () {
  if (currentSlide === numberSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  sliderMove(currentSlide);
  currentPoint(currentSlide);
};

const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = numberSlide - 1;
  } else {
    currentSlide--;
  }
  sliderMove(currentSlide);
  currentPoint(currentSlide);
};
sliderMove(0);

// eventi per cambiare slide tramite bottoni

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// funzione per la creazione dei pallini corrispettivi alle slide

let pointer = function () {
  slides.forEach((point, index) => {
    PointContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dot" data-slide="${index}"></button>`
    );
  });
};
pointer();

// evento per rimuovere e aggiungere il pallino della slide corrispettiva

let currentPoint = function (slide) {
  let allDot = document.querySelectorAll('.dot');
  allDot.forEach(point => point.classList.remove('dot-color'));
  allDot[slide].classList.add('dot-color');
};

// delegate event  che permette di cambiare slide se viene premuto il pallino

PointContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dot')) {
    currentPoint(e.target.dataset.slide);
    sliderMove(e.target.dataset.slide);
  }
});

// evento che permette di cambiare slide con le arrows della tastiera

window.addEventListener('keyup', function (e) {
  if (e.key === 'ArrowRight') {
    nextSlide();
  } else if (e.key === 'ArrowLeft') {
    prevSlide();
  }
});

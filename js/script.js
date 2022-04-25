'use strict';

const ratingBtns = document.querySelectorAll('.btn');
const ratingEl = document.querySelector('.rating-score');
const submitBtnEl = document.querySelector('.submit-btn');
const submitedState = document.querySelector('.submited-state');

function removeClass() {
  for (let i = 0; i < ratingBtns.length; i++) {
    ratingBtns[i].classList.remove('selected');
  }
}

for (let i = 0; i < ratingBtns.length; i++)
  ratingBtns[i].addEventListener('click', function () {
    removeClass();
    ratingBtns[i].classList.add('selected');

    ratingEl.textContent = ratingBtns[i].textContent;
  });

submitBtnEl.addEventListener('click', function () {
  submitedState.classList.remove('hidden');
});

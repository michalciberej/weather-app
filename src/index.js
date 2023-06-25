import './style.css';
import createCard from './card';
import storeDataToLocalstorage from './async';
import { changeTemperatureType } from './card';

function resetInput() {
  document.querySelector('input').value = '';
}

function resetContainer() {
  document.querySelector('#cardContainer').lastChild.remove();
}

document.querySelector('input').addEventListener('keyup', async (e) => {
  if (e.which === 13) {
    if (localStorage.key(0) !== document.querySelector('input[type=text]').value) {
      await storeDataToLocalstorage();
    }
    if (localStorage.length === 1) {
      resetContainer();
    }
    createCard();
    resetInput();
  }
});

function loadLocalstorage() {
  if (localStorage.length === 1) {
    createCard();
  }
}

loadLocalstorage();

document.querySelector('input[type=checkbox]').addEventListener('click', () => changeTemperatureType());

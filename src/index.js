import './style.css';
import createCard from './card';
import storeDataToLocalstorage from './async';
import { changeTemperatureType } from './card';

function resetInput() {
  document.querySelector('input').value = '';
}

function resetContainer() {
  document.querySelector('#card').remove();
}

document.querySelector('input').addEventListener('keyup', async (e) => {
  if (e.which === 13) {
    await storeDataToLocalstorage();
    resetContainer();
    await createCard();
    resetInput();
  }
});

resetContainer();
createCard();

document.querySelector('input[type=checkbox]').addEventListener('click', () => changeTemperatureType());

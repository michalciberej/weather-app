function changeCardColor(element) {
  const card = document.querySelector('#card');
  if (element.temperatureType === 'Sunny') {
    card.style.background = 'linear-gradient(var(--yellowClr) 35%, var(--whiteClr))';
  } else if (element.temperatureType === 'Partly cloudy') {
    card.style.background = 'linear-gradient(var(--blueClr) 35%, var(--whiteClr))';
  } else if (element.temperatureType === 'Overcast') {
    card.style.background = 'linear-gradient(var(--grayClr) 35%, var(--whiteClr))';
  }
}

export function changeTemperatureType() {
  const type = document.querySelector('input[type=checkbox]');
  const localData = JSON.parse(localStorage.getItem(localStorage.key(0)));
  if (type.checked === true) {
    document.querySelector('#temperatureNum').textContent = localData.temperatureC;
    document.querySelector('#temperatureSymbol').textContent = '°C';
  } else if (type.checked === false) {
    document.querySelector('#temperatureNum').textContent = localData.temperatureF;
    document.querySelector('#temperatureSymbol').textContent = '°F';
  }
}

export default async function createCard() {
  const localx = await JSON.parse(localStorage.getItem(localStorage.key(0)));

  const main = document.querySelector('#container');

  const cardDiv = document.createElement('div');
  cardDiv.setAttribute('id', 'card');
  main.appendChild(cardDiv);

  const img = document.createElement('img');
  img.src = localx.imgUrl;
  cardDiv.appendChild(img);

  const temperatureData = document.createElement('div');
  temperatureData.setAttribute('id', 'temperatureData');

  const temperatureNumSpan = document.createElement('span');
  temperatureNumSpan.setAttribute('id', 'temperatureNum');
  temperatureNumSpan.textContent = localx.temperature;

  const temperatureNumSymbol = document.createElement('span');
  temperatureNumSymbol.setAttribute('id', 'temperatureSymbol');
  temperatureNumSymbol.textContent = '°C';

  const temperatureDiv = document.createElement('div');
  temperatureDiv.setAttribute('id', 'temperature');

  temperatureDiv.appendChild(temperatureNumSpan);
  temperatureDiv.appendChild(temperatureNumSymbol);

  const temperatureType = document.createElement('span');
  temperatureType.setAttribute('id', 'temperaturexy');
  temperatureType.textContent = localx.temperatureType;

  temperatureData.appendChild(temperatureDiv);
  temperatureData.appendChild(temperatureType);
  cardDiv.appendChild(temperatureData);

  const placeDiv = document.createElement('div');
  placeDiv.setAttribute('id', 'placeData');

  const citySpan = document.createElement('span');
  citySpan.setAttribute('id', 'city');
  citySpan.textContent = localx.city;

  const countrySpan = document.createElement('span');
  countrySpan.setAttribute('id', 'country');
  countrySpan.textContent = localx.country;

  placeDiv.appendChild(citySpan);
  placeDiv.appendChild(countrySpan);
  cardDiv.appendChild(placeDiv);
  changeCardColor(localx);
  changeTemperatureType();
}

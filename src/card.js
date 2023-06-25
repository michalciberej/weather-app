function changeCardColor(element) {
  const card = document.querySelector('#card');
  if (element.temperatureType === 'Sunny') {
    card.style.background = 'var(--yellowClr)';
  } else if (element.temperatureType === 'Partly cloudy') {
    card.style.background = 'var(--blueClr';
  } else if (element.temperatureType === 'Overcast') {
    card.style.background = 'var(--grayClr)';
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

  const main = document.querySelector('#cardContainer');

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

  const humidityContainer = document.createElement('div');
  humidityContainer.setAttribute('id', 'humidityContainer');
  const humidityText = document.createElement('span');
  humidityText.setAttribute('id', 'humidityText');
  humidityText.textContent = 'Humidity';
  const humidityData = document.createElement('span');
  humidityData.setAttribute('id', 'humidityData');
  humidityData.textContent = `${localx.humidity}%`;
  humidityContainer.appendChild(humidityText);
  humidityContainer.appendChild(humidityData);
  cardDiv.appendChild(humidityContainer);

  const pressureContainer = document.createElement('div');
  pressureContainer.setAttribute('id', 'pressureContainer');
  const pressureText = document.createElement('span');
  pressureText.setAttribute('id', 'pressureText');
  pressureText.textContent = 'Pressure';
  const pressureData = document.createElement('span');
  pressureData.setAttribute('id', 'pressureData');
  pressureData.textContent = `${localx.pressure} hPa`;
  pressureContainer.appendChild(pressureText);
  pressureContainer.appendChild(pressureData);
  cardDiv.appendChild(pressureContainer);

  const windContainer = document.createElement('div');
  windContainer.setAttribute('id', 'windContainer');
  const windText = document.createElement('span');
  windText.setAttribute('id', 'windText');
  windText.textContent = 'Wind';
  const windData = document.createElement('span');
  windData.setAttribute('id', 'windData');
  windData.textContent = `${localx.wind} Km/h`;
  windContainer.appendChild(windText);
  windContainer.appendChild(windData);
  cardDiv.appendChild(windContainer);

  const updateContainer = document.createElement('div');
  updateContainer.setAttribute('id', 'updateContainer');
  const updateText = document.createElement('span');
  updateText.setAttribute('id', 'updateText');
  updateText.textContent = 'Last update';
  const updateData = document.createElement('span');
  updateData.setAttribute('id', 'updateData');
  updateData.textContent = `${localx.update}`;
  updateContainer.appendChild(updateText);
  updateContainer.appendChild(updateData);
  cardDiv.appendChild(updateContainer);

  changeCardColor(localx);
  changeTemperatureType();
}

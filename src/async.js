import Data from './class';

// eslint-disable-next-line consistent-return
async function fetchData(element) {
  try {
    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=75bd6722592a487fa0774223232306&q=${element}`, { mode: 'cors' });
    const formatedData = await data.json();
    return formatedData;
  } catch {
    console.error('ERROR FETCHING DATA');
  }
}

export default async function storeDataToLocalstorage() {
  localStorage.clear();
  const input = document.querySelector('input').value;
  const data = await fetchData(input);
  console.log(data);
  const newData = new Data(
    data.current.temp_c,
    data.current.temp_f,
    data.current.condition.text,
    data.location.name,
    data.location.country,
    data.current.condition.icon,
    data.current.wind_kph,
    data.current.humidity,
    data.current.pressure_in,
    data.current.last_updated,
  );
  console.log(newData);
  localStorage.setItem(newData.city, JSON.stringify(newData));
}

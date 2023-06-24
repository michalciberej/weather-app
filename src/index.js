import './style.css';

const span = document.querySelector('span');
const input = document.querySelector('input');

async function fetchData() {
  try {
    const data = await fetch(`https://api.weatherapi.com/v1/current.json?key=75bd6722592a487fa0774223232306&q=${input.value}`, { mode: 'cors' });
    const formatedData = await data.json();
    console.log(formatedData);
    span.textContent = `${formatedData.current.temp_c}°C`;
  } catch {
    console.error('ERROR FETCHING DATA');
  }
}

function resetInput() {
  input.value = '';
}

input.addEventListener('keyup', (e) => {
  if (e.which === 13) {
    fetchData();
    resetInput();
  }
});

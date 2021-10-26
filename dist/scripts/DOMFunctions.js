import { getCoordinates, getWeatherFromCoordinates } from "./getData.js";
import { searchHistoryContainer, todayContainer } from "./index.js";

dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);
// ============== CURRENT WEATHER UI ============== 

export const buildUI = (searchText, weatherData) => {
  if(searchText === '') searchText = weatherData.timezone;
  const { humidity, temp, wind_speed, uvi  } = weatherData.current;
  let {timezone, current } = weatherData;
  let uvClass = '';
  let iconURL = `https://openweathermap.org/img/w/${current.weather[0].icon}.png`;
  let iconDescription = current.weather[0].description || current[0].main;
  let date = dayjs().tz(timezone).format('M/D/YYYY');

  if (uvi < 3) {
    uvClass = 'success';
  } else if (uvi < 7) {
    uvClass = 'warning';
  } else {
    uvClass = 'danger';
  }

  let card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.innerHTML = `
    <div class="card-body">
      <h2 class="h3 card-title">
        ${searchText} ${date}
        <img src="${iconURL}" alt="${iconDescription}">
      </h2>
      <p class="card-text">Temp: ${temp}°F</p>
      <p class="card-text">Wind: ${wind_speed} MPH</p>
      <p class="card-text">Humidity: ${humidity} %</p>
      <p class="card-text">
        UV Index:
        <button class="btn ${uvClass}">${uvi}</button>
      </p>
    </div>
  `;
  todayContainer.innerHTML = '';
  todayContainer.append(card);
  }

// =============== HISTORY =============== //
let searchHistory = [];

const renderSearchHistory = () => {
  searchHistoryContainer.innerHTML = '';
  let endOfHistoryLength = searchHistory.length;
  for(let index = endOfHistoryLength; index >= 0; index--){
    let btn = document.createElement('button');
    btn.classList.add('.btn-history');
    btn.setAttribute('data-search', searchHistory[index]);
    btn.textContent = searchHistory[index];
    searchHistoryContainer.append(btn);
  }
}

export const appendToHistory = (searchText) => {
  if (searchHistory.includes(searchText)) return;
  searchHistory.push(searchText);
  localStorage.setItem('search-history', JSON.stringify(searchHistory));
  renderSearchHistory();
}

export const getHistory = () => {
  let storedHistory = localStorage.getItem('search-history');
  if(storedHistory) searchHistory = JSON.parse(storedHistory);
  renderSearchHistory();
}

export const handleSearchHistoryClick = async (event) => {
  let btn = event.target;
  let historySearch = btn.getAttribute('data-search');
  const coordsJSON = await getCoordinates(historySearch);
  const weatherJSON = await getWeatherFromCoordinates(coordsJSON);
  buildUI(historySearch, weatherJSON);
}
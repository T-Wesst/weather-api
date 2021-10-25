import { getCoordinates, getCurrentLocation, getWeatherFromCoordinates } from './getData.js';
import { appendToHistory, buildUI, getHistory, handleSearchHistoryClick } from './DOMFunctions.js';

// TODAYS CONTENT
const todayContainer = document.querySelector("#today");
const forecastContainer = document.querySelector('#forecast');
export const searchHistoryContainer = document.querySelector('#history');
// FORM
const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');

let handleSearchFormSubmit = async event => {
  if(!searchInput.value.trim()) return;
  event.preventDefault();
  appendToHistory(searchInput.value);
  const coordsJSON = await getCoordinates(searchInput.value);
  const weatherJSON = await getWeatherFromCoordinates(coordsJSON);
  searchInput.value = "";
  buildUI(weatherJSON);
}

const initApp = async () => {
  const currentCoords = await getCurrentLocation();
  const currentWeatherJSON = await getWeatherFromCoordinates(currentCoords);
  buildUI(currentWeatherJSON);
  getHistory();
}

document.addEventListener("DOMContentLoaded", initApp);
searchForm.addEventListener("submit", handleSearchFormSubmit);
searchHistoryContainer.addEventListener("click", handleSearchHistoryClick)
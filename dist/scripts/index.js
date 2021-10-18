import { getCoordinates, getCurrentLocation, getWeatherFromCoordinates } from './getData.js';

// TODAYS CONTENT
const todayContainer = document.querySelector("#today");
const forecastContainer = document.querySelector('#forecast');
// FORM
const searchInput = document.querySelector('#search-input');
const searchForm = document.querySelector('#search-form');






let handleSearchFormSubmit = async event => {
  if(!searchInput.value.trim()) return;
  event.preventDefault();
  const coordsJSON = await getCoordinates(searchInput.value);
  const weatherJSON = await getWeatherFromCoordinates(coordsJSON);
  searchInput.value = "";
  console.log("searched weather JSON", weatherJSON);
}

const initApp = async () => {
  const currentCoords = await getCurrentLocation();
  const currentWeatherJSON = await getWeatherFromCoordinates(currentCoords);
  console.log(currentWeatherJSON);
}




document.addEventListener("DOMContentLoaded", initApp);
searchForm.addEventListener("submit", handleSearchFormSubmit);
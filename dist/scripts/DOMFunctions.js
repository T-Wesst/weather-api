import { getCoordinates, getWeatherFromCoordinates } from "./getData.js";
import { searchHistoryContainer } from "./index.js";

export const buildUI = (weatherData) => {
  console.log(weatherData)
  // const {timezone} = weatherData;
  // let todayContainer = document.querySelector("#today");
  // let todayCard = document.createElement('div');
  // todayCard.innerHTML = `
  //   <div class="container">
  //     <h5 class="card-title">TIMEZONE: ${timezone}</h5>
  //     <div class="card mb-3">
  //     <div class="row g-0">
  //     <div class="col-md-4">
  //     <img src="..." class="img-fluid rounded-start" alt="...">
  //     </div>
  //     <div class="col-md-8">
  //     <div class="card-body">
  //     <p class="card-text">Today will be TEMP F with a wind speed of TEMP MPH and a humidity of TEMP % and a UV Index of TEMP.</p>
  //     </div>
  //     </div>
  //     </div>
  //     </div>
  //     </div>`;

  //   let cardBody = document.createElement('div');
  //   cardBody.setAttribute("class", "card-body");
  //   todayCard.append(cardBody);
  //   todayContainer.append(todayCard);

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
  await getWeatherFromCoordinates(coordsJSON);
}
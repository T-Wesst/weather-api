import { getCurrentLocation, getWeatherFromCoordinates } from './getData.js';
import { buildUI, getHistory, handleSearchHistoryClick, handleSearchFormSubmit } from './DOMFunctions.js';
import { searchHistoryContainer, searchForm, searchInput } from './DOMFunctions.js';


const initApp = async () => {
  const currentCoords = await getCurrentLocation();
  const currentWeatherJSON = await getWeatherFromCoordinates(currentCoords);
  buildUI(searchInput.value, currentWeatherJSON);
  getHistory();
}

document.addEventListener("DOMContentLoaded", initApp);
searchForm.addEventListener("submit", handleSearchFormSubmit);
searchHistoryContainer.addEventListener("click", handleSearchHistoryClick)
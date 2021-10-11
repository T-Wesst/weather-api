import { getCoordinates } from './getData.js';
const response = await getCoordinates("London", "imperial");
console.log(response);
// const baseURL = 'https://api.openweathermap.org';

// const todayContainer = document.querySelector("#today");
// const forecastContainer = document.querySelector('#forecast');

// // console.log(localStorage);


// let timezone = localStorage.getItem('timezone');
// let temp = localStorage.getItem('temp');
// let windSpeed = localStorage.getItem('windSpeed');
// let humidity = localStorage.getItem('humidity');
// let uvIndex = localStorage.getItem('uvIndex');
// let dt = localStorage.getItem('dt');

// let todayCard = document.createElement('div');
// todayCard.innerHTML = `
// <h5 class="card-title">${timezone}</h5>
// <div class="card mb-3">
// <div class="row g-0">
// <div class="col-md-4">
// <img src="..." class="img-fluid rounded-start" alt="...">
// </div>
// <div class="col-md-8">
// <div class="card-body">
// <p class="card-text">Today will be ${temp}F with a wind speed of ${windSpeed} MPH and a humidity of ${humidity}% and a UV Index of ${uvIndex}.</p>
// </div>
// </div>
// </div>
// </div>`;

// let fiveDayCards = document.createElement('div');
// fiveDayCards.innerHTML = `
// <h5 class="card-title">Five Day Forecast:</h5>
// <div class="row row-cols-1 row-cols-md-3 g-4">
//   <div class="col">
//     <div class="card h-100">
//       <img src="..." class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${dt}</h5>
//         <p class="card-text">Temp: ${temp} Wind: ${windSpeed} Humidity: ${humidity}</p>
//       </div>
//     </div>
//   </div>
//   <div class="col">
//     <div class="card h-100">
//       <img src="..." class="card-img-top" alt="...">
//       <div class="card-body">
//       <h5 class="card-title">${dt}</h5>
//       <p class="card-text">Temp: ${temp} Wind: ${windSpeed} Humidity: ${humidity}</p>
//       </div>
//     </div>
//   </div>
//   <div class="col">
//     <div class="card h-100">
//       <img src="..." class="card-img-top" alt="...">
//       <div class="card-body">
//       <h5 class="card-title">${dt}</h5>
//       <p class="card-text">Temp: ${temp} Wind: ${windSpeed} Humidity: ${humidity}</p>
//       </div>
//     </div>
//   </div>
//   <div class="col">
//     <div class="card h-100">
//       <img src="..." class="card-img-top" alt="...">
//       <div class="card-body">
//       <h5 class="card-title">${dt}</h5>
//       <p class="card-text">Temp: ${temp} Wind: ${windSpeed} Humidity: ${humidity}</p>
//       </div>
//     </div>
//   </div>
//   <div class="col">
//     <div class="card h-100">
//       <img src="..." class="card-img-top" alt="...">
//       <div class="card-body">
//       <h5 class="card-title">${dt}</h5>
//       <p class="card-text">Temp: ${temp} Wind: ${windSpeed} Humidity: ${humidity}</p>
//       </div>
//     </div>
//   </div>
// </div>
// `

// let cardBody = document.createElement('div');
// cardBody.setAttribute("class", "card-body");
// todayCard.append(cardBody);

// todayContainer.append(todayCard);
// forecastContainer.append(fiveDayCards);
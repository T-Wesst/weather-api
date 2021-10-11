// const getCoordinates = async () => {
//   const {coords:{longitude}, coords:{latitude} } = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
//   return {longitude,latitude};
// }

// (fetch("./.netlify/functions/getWeather").then(response => response.json()).then(data => console.log(data)))

export const getCoordinates = async () => {
  const response = await fetch('./.netlify/functions/getCoordinates');
  const jsonData = response.json();
  return jsonData;
}

// const fetchWeatherData = async (lon, lat) => {
//   let apiUrl = `${baseURL}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
//   const response = await fetch(apiUrl);
//   const data = response.json();
//   return data;
// }


// window.onload = async () => {
//   const {longitude, latitude} = await getCoordinates();
//   const data = await fetchWeatherData(longitude, latitude);
//   const {humidity, temp, wind_speed, uvi, dt} = data.current;
//   const timezone = data.timezone;
//   localStorage.clear();
//   localStorage.setItem('timezone', timezone);
//   localStorage.setItem('humidity', humidity);
//   localStorage.setItem('temp', temp);
//   localStorage.setItem('windSpeed', wind_speed);
//   localStorage.setItem('uvIndex', uvi);
//   localStorage.setItem('dt', dt);
//   console.log(data);
// }
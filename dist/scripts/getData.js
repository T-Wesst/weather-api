// const getCoordinates = async () => {
//   const {coords:{longitude}, coords:{latitude} } = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
//   return {longitude,latitude};
// }

// (fetch("./.netlify/functions/getWeather").then(response => response.json()).then(data => console.log(data)))

export const getCoordinates = async (city) => {
  let url = `./.netlify/functions/getCoordinates?city=${city}`;
  try {
    const dataStream = await fetch(url);
    return await dataStream.json();
  } catch(err) {
    console.error(err);
  }
}

export const getWeatherFromCoordinates = async (locationObject) => {
  
  // console.log(locationObject);
  const { lat, lon, units } = locationObject;

  const dataObject = { lat,lon, units};
  // console.log(dataObject);

  try {
    const weatherStream = await fetch("./.netlify/functions/getWeather", {
      method: "POST",
      body: JSON.stringify(dataObject)
    });
    const jsonData = await weatherStream.json();
    return jsonData;
  } catch(err) {
    console.error(err);
  }
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
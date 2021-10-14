// const getCoordinates = async () => {
//   const {coords:{longitude}, coords:{latitude} } = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
//   return {longitude,latitude};
// }


export const getCoordinates = async (city) => {
  let url = `./.netlify/functions/getCoordinates?city=${city}`;
  try {
    const dataStream = await fetch(url);
    return await dataStream.json();
  } catch(err) {
    console.error(err);
  }
}

export const getWeatherFromCoordinates = async ({ coord }) => {
  const { lat, lon } = coord;
  let url = `./.netlify/functions/getWeather?lat=${lat}&lon=${lon}`;
  try {
    const weatherStream = await fetch(url);
    return await weatherStream.json();
  } catch(err) {
    console.error(err);
  }
}


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
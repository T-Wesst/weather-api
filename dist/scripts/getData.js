export const getCurrentLocation = async () => {
  const { coords } = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
  return { coord: { lat: coords.latitude, lon:coords.longitude }};
};


export const getCoordinatesFromSearch = async (city) => {
  let url = `./.netlify/functions/getCoordinates?city=${city}`;
  try {
    const dataStream = await fetch(url);
    return await dataStream.json();
  } catch(err) {
    console.error(err);
  }
};

export const getWeatherFromCoordinates = async ({ coord }) => {
  const { lat, lon } = coord;
  let url = `./.netlify/functions/getWeather?lat=${lat}&lon=${lon}`;
  try {
    const weatherStream = await fetch(url);
    return await weatherStream.json();
  } catch(err) {
    console.error(err);
  }
};
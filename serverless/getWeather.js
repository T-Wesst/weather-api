const axios = require('axios').default;
const { APIKEY } = process.env;
const baseURL = 'https://api.openweathermap.org';

exports.handler = async event => {
  const { lat, lon } = event.queryStringParameters
  const url = `${baseURL}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${APIKEY}`;
  try {
    const { data } = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return { statusCode: 422, body: err.stack };
  }
}
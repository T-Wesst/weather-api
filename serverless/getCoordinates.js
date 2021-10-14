const axios = require('axios').default;
const { APIKEY } = process.env;
const baseURL = 'https://api.openweathermap.org';

exports.handler = async event => {
  const { city }  = event.queryStringParameters;
  const url = `${baseURL}/data/2.5/weather?q=${city}&apikey=${APIKEY}`;
  try {
    const { data } = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return { statusCode: 422, body: err.stack };
  }
};
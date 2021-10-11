const { APIKEY } = process.env;
const baseURL = 'https://api.openweathermap.org';

exports.handler = async (event, context) => {
  const params = JSON.parse(event.body);
  const { cityName, units } = params;
  const url = `${baseURL}/data/2.5/weather?q=${cityName}&units=${units}&appid=${APIKEY}`;
  const encodedUrl = encodeURI(url);
  try {
    const dataStream = await fetch(encodedUrl);
    const jsonData = await dataStream.json();
    return {
      statusCode: 200,
      body: JSON.stringify(jsonData)
    };
  } catch (err) {
    return { statusCode: 422, body: err.stack };
  }
};
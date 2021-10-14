const { APIKEY } = process.env;
const baseURL = 'https://api.openweathermap.org';


exports.handler = async event => {
  const { lat, lon } = event.queryStringParameters;
  console.log("coordinates",lat, lon);
  // const url = `${baseURL}/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${units}&appid=${APIKEY}`;
  try {
  //   const weatherStream = await fetch(url);
  //   const weatherJSON = await weatherStream.json();
    return {
      statusCode: 200,
      body: JSON.stringify({message: "getting weather from coordinates"})
    };
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify(weatherJSON)
    // };
  } catch (err) {
    return { statusCode: 422, body: err.stack };
  }
}
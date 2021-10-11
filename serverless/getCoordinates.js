const { APIKEY } = process.env;
const baseURL = 'https://api.openweathermap.org';

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({message: "hello"})
  }
};
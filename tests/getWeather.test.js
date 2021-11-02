const getWeather = require('../serverless/getWeather');
const mockAxios = require('axios');
jest.mock('axios');

mockAxios.get.mockResolvedValue({
  data: {
    lat: 34.0522,
    lon: -118.2437,
    timezone: "America/Los_Angeles",
  },
  statusCode: 200
});

describe('getWeather', () => {
  test('should return stringified object containing weather data', async () => {
    const event = {
      queryStringParameters: {
        lon: -118.2437, 
        lat: 34.0522
      }
    };
    const bodyResult = {
        lat: 34.0522,
        lon: -118.2437,
        timezone: "America/Los_Angeles",
      };
  const { body } = await getWeather.handler(event);
  expect(body).toBe(JSON.stringify(bodyResult));
  })
})
const getCoordinates = require('../serverless/getCoordinates');
const mockAxios = require('axios');
jest.mock('axios');

mockAxios.get.mockResolvedValue({
  data: { 
      coord: { 
        lon: -118.2437, 
        lat: 34.0522
      },
    },
    statusCode: 200,
  });


describe('getCoordinates', () => {
  afterEach(jest.clearAllMocks);
  test('should return an stringified object containing longitude and latitude', async () => {
    const event = { 
      queryStringParameters: {
        city: "los angeles"
      }
    };
    const bodyResult = {
        coord: { 
          lon: -118.2437, 
          lat: 34.0522
        },
    };
    const { body } = await getCoordinates.handler(event);
    expect(body).toBe(JSON.stringify(bodyResult));
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  })
});
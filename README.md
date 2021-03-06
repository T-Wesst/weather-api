[![Netlify Status](https://api.netlify.com/api/v1/badges/d37865bf-8043-421a-9b17-cda822a9ebd9/deploy-status)](https://app.netlify.com/sites/weather-forecaster-api/deploys)
# Weather Dashboard API

Use the [OpenWeather One Call API](https://openweathermap.org/api/one-call-api) to retrieve weather data for cities. Use `localStorage` to store any persistent data.

## User Story

```
AS a traveler, I want to:
  - see the weather outlook for multiple locations.
```

## Acceptance Criteria

```
Given a weather dashboard with form inputs, a user can search for a city and:
- [ ] see current and future weather conditions for 
- [ ] see current and future conditions for that city and the city is added to the search history.
- [ ] see the city name, data, and icon representing the current condition, temperature, humidity, wind speed, and UV index.
- [ ] the UV index presents a color indicator whether the conditions are favorable, moderate or severe.
- [ ] view a 5 day forecast that displays the date, an icon representation of weather conditions, the temperature, wind speed, and humidity.
- [ ] view a previous city from search history.
```

## Review

- [x] deploy the application on Netlify
- [x] do not expose API Key
- [x] add unit tests
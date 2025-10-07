# WeatherTravelForecast

Travel packing helper for UK travelers — get personalized packing lists based on destination weather.

## Overview

This Angular app helps travelers in the UK plan their packing by showing a 5-day weather forecast for major cities. Powered by [OpenWeatherMap](https://openweathermap.org), users can get the forecast for Birmingham, London, and Cardiff, helping them decide what clothes to bring.

## Features

- **Select UK City:** Choose Birmingham, London, or Cardiff to view forecasts.
- **No City Selected:** Prompts you to select a city; no forecast is shown.
- **5-Day Forecast:** See daily temperature (°C), windspeed, weather description, and an icon.
- **Easy City Switching:** Changing the city updates the forecast immediately.
- **Live Weather Data:** Integrated with OpenWeatherMap’s 5-day forecast API.

## How It Works

1. **Choose a City:** Use the dropdown to select your destination.
2. **View Forecast:** The next 5 days’ weather is displayed with all key details.
3. **Change City:** Select another city to see its forecast.

## Technologies

- Angular (TypeScript)
- OpenWeatherMap API
- SCSS

## Development

Run the app locally:

```bash
npm install
ng serve
```

Visit [http://localhost:4200](http://localhost:4200).

## API Configuration

Set your OpenWeatherMap API key in the environment file:

```typescript
environment.weatherApi = {
  apiKey: "YOUR_API_KEY",
  baseUrl: "https://api.openweathermap.org/data/2.5",
  iconBaseUrl: "https://openweathermap.org/img/wn",
};
```

## Project Structure

- `src/app/weather/models/forecast.model.ts` — Data models
- `src/app/weather/components/` — UI components
- `src/app/weather/services/weather-api.service.ts` — API integration
- `src/app/weather/sandbox/weather-sandbox.ts` — State and business logic

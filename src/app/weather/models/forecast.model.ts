/**
 * Represents a single day's weather forecast.
 */
export interface ForeCastDay {
  date: string;
  temperatureCelsius: number;
  windSpeed: number;
  weatherDescription: string;
  weatherIcon: string;
}

/**
 * Represents the complete 5-day forecast for a city
 */
export interface CityForecast {
  cityName: string;
  forecastDays: ForeCastDay[];
}

/**
 * Available cities for forecast selection
 */
export enum City {
  Birmingham = 'Birmingham',
  London = 'London',
  Cardiff = 'Cardiff',
}

/**
 * Type for city selection (can be a city or null when no city selected)
 */
export type SelectedCity = City | null;

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environmnet';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CityForecast, ForeCastDay } from '../models/forecast.model';

interface OpenWeatherResponse {
  city: {
    name: string;
  };
  list: Array<{
    dt_txt: string;
    main: {
      temp: number;
    };
    wind: {
      speed: number;
    };
    weather: Array<{
      description: string;
      icon: string;
    }>;
  }>;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  private readonly apiKey = environment.weatherApi.apiKey;
  private readonly baseUrl = environment.weatherApi.baseUrl;
  private readonly iconBaseUrl = environment.weatherApi.iconBaseUrl;

  constructor(private http: HttpClient) {}

  getForecast(cityName: string): Observable<CityForecast> {
    const url = `${this.baseUrl}/forecast?q=${cityName},GB&units=metric&appid=${this.apiKey}`;

    return this.http
      .get<OpenWeatherResponse>(url)
      .pipe(map((response) => this.transformToForecast(response)));
  }

  private transformToForecast(response: OpenWeatherResponse): CityForecast {
    const dailyForecasts = response.list
      .filter((item) => item.dt_txt.includes('12:00:00'))
      .slice(0, 5)
      .map((item) => this.transformToForecastDay(item));

    return {
      cityName: response.city.name,
      forecastDays: dailyForecasts,
    };
  }

  private transformToForecastDay(
    item: OpenWeatherResponse['list'][0]
  ): ForeCastDay {
    return {
      date: item.dt_txt.split(' ')[0],
      temperatureCelsius: Math.round(item.main.temp),
      windSpeed: item.wind.speed,
      weatherDescription: item.weather[0].description,
      weatherIcon: `${this.iconBaseUrl}/${item.weather[0].icon}@2x.png`,
    };
  }
}

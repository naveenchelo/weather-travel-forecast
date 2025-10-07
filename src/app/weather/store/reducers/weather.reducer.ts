import { createReducer, on } from '@ngrx/store';
import { CityForecast, SelectedCity } from '../../models/forecast.model';
import * as WeatherActions from '../actions/weather.actions';

/**
 * Weather feature state interface
 */
export interface WeatherState {
  selectedCity: SelectedCity;
  currentForecast: CityForecast | null;
  loading: boolean;
  error: string | null;
}

/**
 * Initial state for the weather feature
 */
export const initialState: WeatherState = {
  selectedCity: null,
  currentForecast: null,
  loading: false,
  error: null,
};

export const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.selectCity, (state, { city }) => ({
    ...state,
    selectedCity: city,
    error: null,
  })),
  on(WeatherActions.clearCitySelection, (state) => ({
    ...state,
    selectedCity: null,
    currentForecast: null,
    loading: false,
    error: null,
  })),
  on(WeatherActions.loadForecast, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(WeatherActions.loadForecastSuccess, (state, { forecast }) => ({
    ...state,
    currentForecast: forecast,
    loading: false,
    error: null,
  })),
  on(WeatherActions.loadForecastFailure, (state, { error }) => ({
    ...state,
    currentForecast: null,
    loading: false,
    error,
  }))
);

/**
 * Feature state key for NgRx store
 */
export const weatherFeatureKey = 'weather';

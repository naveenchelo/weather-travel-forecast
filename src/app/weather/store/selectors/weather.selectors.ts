import { createFeatureSelector, createSelector } from '@ngrx/store';
import { weatherFeatureKey, WeatherState } from '../reducers/weather.reducer';

/**
 * Select the entire weather feature state
 */
export const selectWeatherState =
  createFeatureSelector<WeatherState>(weatherFeatureKey);

export const selectSelectedCity = createSelector(
  selectWeatherState,
  (state: WeatherState) => state.selectedCity
);

export const selectCurrentForecast = createSelector(
  selectWeatherState,
  (state: WeatherState) => state.currentForecast
);

export const selectLoading = createSelector(
  selectWeatherState,
  (state: WeatherState) => state.loading
);

export const selectError = createSelector(
  selectWeatherState,
  (state: WeatherState) => state.error
);

export const selectHasSelectedCity = createSelector(
  selectSelectedCity,
  (city) => city !== null
);

export const selectHasForecast = createSelector(
  selectCurrentForecast,
  (forecast) => forecast !== null
);

export const selectForecastDays = createSelector(
  selectCurrentForecast,
  (forecast) => forecast?.forecastDays ?? null
);

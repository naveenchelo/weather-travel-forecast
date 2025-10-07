import { createAction, props } from '@ngrx/store';
import { City, CityForecast } from '../../models/forecast.model';

export const selectCity = createAction(
  '[Weather] Select City',
  props<{ city: City }>()
);

export const clearCitySelection = createAction(
  '[Weather] Clear City Selection'
);

export const loadForecast = createAction(
  '[Weather] Load Forecast',
  props<{ city: City }>()
);

export const loadForecastSuccess = createAction(
  '[Weather] Load Forecast Success',
  props<{ forecast: CityForecast }>()
);

export const loadForecastFailure = createAction(
  '[Weather] Load Forecast Failure',
  props<{ error: string }>()
);

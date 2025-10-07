import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as WeatherActions from '../actions/weather.actions';
import { WeatherApiService } from '../../services/weather-api.service';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherApi: WeatherApiService
  ) {}

  /**
   * Effect: When user selects a city, automatically trigger loadForecast
   */
  selectCity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.selectCity),
      map((action) => WeatherActions.loadForecast({ city: action.city }))
    )
  );

  /**
   * Effect: Load forecast data from API
   */
  loadForecast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadForecast),
      switchMap((action) =>
        this.weatherApi.getForecast(action.city).pipe(
          map((forecast) => WeatherActions.loadForecastSuccess({ forecast })),
          catchError((error) => {
            console.error('Error loading forecast:', error);
            const errorMessage =
              error?.error?.message || 'Failed to load weather data';
            return of(
              WeatherActions.loadForecastFailure({ error: errorMessage })
            );
          })
        )
      )
    )
  );
}

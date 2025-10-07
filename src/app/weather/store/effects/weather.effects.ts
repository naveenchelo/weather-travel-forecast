import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, of, switchMap } from 'rxjs';
import * as WeatherActions from '../actions/weather.actions';

@Injectable()
export class WeatherEffects {
  constructor(private actions$: Actions) {}

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
      switchMap((action) => {
        console.log(`Effect: Loading forecast for ${action.city}`);
        console.log('API integration pending - this will be implemented next');

        return of(
          WeatherActions.loadForecastFailure({
            error: 'API not yet integrated',
          })
        );
      })
    )
  );
}

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  City,
  CityForecast,
  ForeCastDay,
  SelectedCity,
} from '../models/forecast.model';
import * as WeatherSelectors from '../store/selectors/weather.selectors';
import * as WeatherActions from '../store/actions/weather.actions';

@Injectable({
  providedIn: 'root',
})
export class WeatherSandboxService {
  public readonly selectedCity$!: Observable<SelectedCity>;
  public readonly currentForecast$!: Observable<CityForecast | null>;
  public readonly forecastDays$!: Observable<ForeCastDay[] | null>;
  public readonly loading$!: Observable<boolean>;
  public readonly error$!: Observable<string | null>;
  public readonly hasSelectedCity$!: Observable<boolean>;
  public readonly hasForecast$!: Observable<boolean>;

  constructor(private store: Store) {
    // Initialize all observables by selecting from the store
    this.selectedCity$ = this.store.select(WeatherSelectors.selectSelectedCity);
    this.currentForecast$ = this.store.select(
      WeatherSelectors.selectCurrentForecast
    );
    this.forecastDays$ = this.store.select(WeatherSelectors.selectForecastDays);
    this.loading$ = this.store.select(WeatherSelectors.selectLoading);
    this.error$ = this.store.select(WeatherSelectors.selectError);
    this.hasSelectedCity$ = this.store.select(
      WeatherSelectors.selectHasSelectedCity
    );
    this.hasForecast$ = this.store.select(WeatherSelectors.selectHasForecast);
  }

  public selectCity(city: City): void {
    this.store.dispatch(WeatherActions.selectCity({ city }));
  }

  public clearCitySelection(): void {
    this.store.dispatch(WeatherActions.clearCitySelection());
  }

  public loadForecast(city: City): void {
    this.store.dispatch(WeatherActions.loadForecast({ city }));
  }

  public getAvailableCities(): City[] {
    return [City.Birmingham, City.London, City.Cardiff];
  }
}

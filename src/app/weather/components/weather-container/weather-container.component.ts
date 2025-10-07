import { Component, OnInit } from '@angular/core';
import { WeatherSandboxService } from '../../sandbox/weather-sandbox';
import { City, ForeCastDay, SelectedCity } from '../../models/forecast.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrl: './weather-container.component.scss',
})
export class WeatherContainerComponent implements OnInit {
  availableCities!: City[];

  selectedCity$!: Observable<SelectedCity>;
  forecastDays$!: Observable<ForeCastDay[] | null>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  hasForecast$!: Observable<boolean>;

  constructor(private sandbox: WeatherSandboxService) {}

  ngOnInit() {
    this.selectedCity$ = this.sandbox.selectedCity$;
    this.forecastDays$ = this.sandbox.forecastDays$;
    this.loading$ = this.sandbox.loading$;
    this.error$ = this.sandbox.error$;
    this.hasForecast$ = this.sandbox.hasForecast$;

    // Get available cities from sandbox
    this.availableCities = this.sandbox.getAvailableCities();
  }

  onCitySelected(city: City | null): void {
    if (city) {
      this.sandbox.selectCity(city);
    } else {
      this.sandbox.clearCitySelection();
    }
  }
}

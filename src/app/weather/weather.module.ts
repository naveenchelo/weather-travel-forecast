import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherContainerComponent } from './components/weather-container/weather-container.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { ForecastListComponent } from './components/forecast-list/forecast-list.component';
import { ForecastDayCardComponent } from './components/forecast-day-card/forecast-day-card.component';
import { Store, StoreModule } from '@ngrx/store';
import { weatherReducer } from './store/reducers/weather.reducer';
import { WeatherEffects } from './store/effects/weather.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    WeatherContainerComponent,
    CitySelectorComponent,
    ForecastListComponent,
    ForecastDayCardComponent,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    StoreModule.forFeature('weatherFeatureKey', weatherReducer),
    EffectsModule.forFeature([WeatherEffects]),
  ],
})
export class WeatherModule {}

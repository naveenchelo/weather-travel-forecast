import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherContainerComponent } from './components/weather-container/weather-container.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { ForecastListComponent } from './components/forecast-list/forecast-list.component';
import { ForecastDayCardComponent } from './components/forecast-day-card/forecast-day-card.component';
import { StoreModule } from '@ngrx/store';
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
    StoreModule.forFeature('weather', weatherReducer),
    EffectsModule.forFeature([WeatherEffects]),

    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
  ],
})
export class WeatherModule {}

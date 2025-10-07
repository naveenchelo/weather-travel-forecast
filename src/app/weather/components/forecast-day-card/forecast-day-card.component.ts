import { Component, Input } from '@angular/core';
import { ForeCastDay } from '../../models/forecast.model';

@Component({
  selector: 'app-forecast-day-card',
  templateUrl: './forecast-day-card.component.html',
  styleUrl: './forecast-day-card.component.scss',
})
export class ForecastDayCardComponent {
  @Input() forecastDay!: ForeCastDay;

  getFormattedDate(): string {
    if (!this.forecastDay?.date) {
      return '';
    }

    const date = new Date(this.forecastDay.date);
    return date.toLocaleDateString('en-GB', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  }

  getDayOfWeek(): string {
    if (!this.forecastDay?.date) {
      return '';
    }

    const date = new Date(this.forecastDay.date);
    return date.toLocaleDateString('en-GB', { weekday: 'long' });
  }
}

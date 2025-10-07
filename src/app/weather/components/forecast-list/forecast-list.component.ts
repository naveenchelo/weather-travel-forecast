import { Component, Input } from '@angular/core';
import { ForeCastDay } from '../../models/forecast.model';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrl: './forecast-list.component.scss',
})
export class ForecastListComponent {
  @Input() forecastDays: ForeCastDay[] | null = null;

  trackByDate(index: number, day: ForeCastDay): string {
    return day.date;
  }
}

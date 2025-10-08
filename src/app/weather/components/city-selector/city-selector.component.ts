import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City, SelectedCity } from '../../models/forecast.model';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.scss',
})
export class CitySelectorComponent {
  @Input() cities: City[] = [];

  @Input() selectedCity: SelectedCity = null;

  @Output() citySelected = new EventEmitter<City | null>();

  onCityChange(event: MatSelectChange): void {
    const selectedValue = event.value;
    this.citySelected.emit(selectedValue || null);
  }
}

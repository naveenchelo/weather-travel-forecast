import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City, SelectedCity } from '../../models/forecast.model';

@Component({
  selector: 'app-city-selector',
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.scss',
})
export class CitySelectorComponent {
  @Input() cities: City[] = [];

  @Input() selectedCity: SelectedCity = null;

  @Output() citySelected = new EventEmitter<City | null>();

  onCityChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if (selectedValue) {
      this.citySelected.emit(selectedValue as City);
    } else {
      this.citySelected.emit(null);
    }
  }
}

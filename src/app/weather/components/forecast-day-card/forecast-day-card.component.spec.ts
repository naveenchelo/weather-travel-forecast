import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDayCardComponent } from './forecast-day-card.component';

describe('ForecastDayCardComponent', () => {
  let component: ForecastDayCardComponent;
  let fixture: ComponentFixture<ForecastDayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastDayCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForecastDayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

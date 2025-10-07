import { TestBed } from '@angular/core/testing';

import { WeatherSandboxService } from './weather-sandbox.service';

describe('WeatherSandboxService', () => {
  let service: WeatherSandboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherSandboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

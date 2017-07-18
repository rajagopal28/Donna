import { TestBed, inject } from '@angular/core/testing';

import { IndoorLocationDataService } from './indoor-location-data.service';

describe('IndoorLocationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndoorLocationDataService]
    });
  });

  it('should be created', inject([IndoorLocationDataService], (service: IndoorLocationDataService) => {
    expect(service).toBeTruthy();
  }));
});

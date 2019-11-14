import { TestBed } from '@angular/core/testing';

import { ServicesAPIService } from './services-api.service';

describe('ServicesAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesAPIService = TestBed.get(ServicesAPIService);
    expect(service).toBeTruthy();
  });
});

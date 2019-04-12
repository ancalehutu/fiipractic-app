import { TestBed } from '@angular/core/testing';

import { AdaugareService } from './adaugare.service';

describe('AdaugareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdaugareService = TestBed.get(AdaugareService);
    expect(service).toBeTruthy();
  });
});

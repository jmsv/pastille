import { TestBed } from '@angular/core/testing';

import { PastilleService } from './pastille.service';

describe('PastilleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PastilleService = TestBed.get(PastilleService);
    expect(service).toBeTruthy();
  });
});

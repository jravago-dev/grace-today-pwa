import { TestBed } from '@angular/core/testing';

import { BibleApiService } from './bible-api.service';

describe('BibleApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BibleApiService = TestBed.get(BibleApiService);
    expect(service).toBeTruthy();
  });
});

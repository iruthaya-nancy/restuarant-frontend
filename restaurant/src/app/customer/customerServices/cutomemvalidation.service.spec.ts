import { TestBed } from '@angular/core/testing';

import { CutomemvalidationService } from './cutomemvalidation.service';

describe('CutomemvalidationService', () => {
  let service: CutomemvalidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CutomemvalidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

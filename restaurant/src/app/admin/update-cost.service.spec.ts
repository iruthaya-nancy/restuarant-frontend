import { TestBed } from '@angular/core/testing';

import { UpdateCostService } from './update-cost.service';

describe('UpdateCostService', () => {
  let service: UpdateCostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateCostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

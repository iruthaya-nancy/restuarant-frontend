import { TestBed } from '@angular/core/testing';

import { PaymentmodeServiceService } from './paymentmode-service.service';

describe('PaymentmodeServiceService', () => {
  let service: PaymentmodeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentmodeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

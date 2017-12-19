import { TestBed, inject } from '@angular/core/testing';

import { OrdercloudSdkService } from './ordercloud-sdk.service';

describe('OrdercloudSdkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdercloudSdkService]
    });
  });

  it('should be created', inject([OrdercloudSdkService], (service: OrdercloudSdkService) => {
    expect(service).toBeTruthy();
  }));
});

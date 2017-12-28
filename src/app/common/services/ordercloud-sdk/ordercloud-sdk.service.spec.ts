import { TestBed, inject } from '@angular/core/testing';

import { OrderCloudSDK } from './ordercloud-sdk.service';

describe('OrdercloudSdkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderCloudSDK]
    });
  });

  it('should be created', inject([OrderCloudSDK], (service: OrderCloudSDK) => {
    expect(service).toBeTruthy();
  }));
});

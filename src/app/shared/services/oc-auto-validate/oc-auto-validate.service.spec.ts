import { TestBed, inject } from '@angular/core/testing';

import { OcAutoValidate } from './oc-auto-validate.service';

describe('OcAutoValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcAutoValidate]
    });
  });

  it('should be created', inject([OcAutoValidate], (service: OcAutoValidate) => {
    expect(service).toBeTruthy();
  }));
});

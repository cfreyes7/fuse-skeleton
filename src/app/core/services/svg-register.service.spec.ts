import { TestBed, inject } from '@angular/core/testing';

import { SvgRegisterService } from './svg-register.service';

describe('SvgRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SvgRegisterService]
    });
  });

  it('should be created', inject([SvgRegisterService], (service: SvgRegisterService) => {
    expect(service).toBeTruthy();
  }));
});

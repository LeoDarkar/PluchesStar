import { TestBed } from '@angular/core/testing';

import { ProvinciasEcService } from './provincias-ec.service';

describe('ProvinciasEcService', () => {
  let service: ProvinciasEcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvinciasEcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

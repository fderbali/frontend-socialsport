import { TestBed } from '@angular/core/testing';

import { CourrielServiceService } from './courriel.service';

describe('CourrielServiceService', () => {
  let service: CourrielServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourrielServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

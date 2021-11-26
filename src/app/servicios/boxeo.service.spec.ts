import { TestBed } from '@angular/core/testing';

import { BoxeoService } from './boxeo.service';

describe('BoxeoService', () => {
  let service: BoxeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

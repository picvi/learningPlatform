import { TestBed } from '@angular/core/testing';

import { BgPastService } from './bg-past.service';

describe('BgPastService', () => {
  let service: BgPastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BgPastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

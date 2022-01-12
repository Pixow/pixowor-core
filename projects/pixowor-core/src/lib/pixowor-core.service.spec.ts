import { TestBed } from '@angular/core/testing';

import { PixoworCoreService } from './pixowor-core.service';

describe('PixoworCoreService', () => {
  let service: PixoworCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PixoworCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

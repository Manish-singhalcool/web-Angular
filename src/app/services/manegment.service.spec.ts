import { TestBed } from '@angular/core/testing';

import { ManegmentService } from './manegment.service';

describe('ManegmentService', () => {
  let service: ManegmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManegmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

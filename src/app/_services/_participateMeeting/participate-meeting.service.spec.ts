import { TestBed } from '@angular/core/testing';

import { ParticipateMeetingService } from './participate-meeting.service';

describe('ParticipateMeetingService', () => {
  let service: ParticipateMeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipateMeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

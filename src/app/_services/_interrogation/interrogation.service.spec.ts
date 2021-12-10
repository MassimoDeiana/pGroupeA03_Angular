import { TestBed } from '@angular/core/testing';

import { InterrogationService } from './interrogation.service';

describe('InterrogationService', () => {
  let service: InterrogationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterrogationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

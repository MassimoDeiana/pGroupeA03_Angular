import { TestBed } from '@angular/core/testing';

import { SchoolclassService } from './schoolclass.service';

describe('SchoolclassService', () => {
  let service: SchoolclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

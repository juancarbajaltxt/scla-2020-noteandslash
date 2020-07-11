import { TestBed } from '@angular/core/testing';

import { TaskaddedService } from './taskadded.service';

describe('TaskaddedService', () => {
  let service: TaskaddedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskaddedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

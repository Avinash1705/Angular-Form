import { TestBed } from '@angular/core/testing';

import { AllFunctionService } from './all-function.service';

describe('AllFunctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllFunctionService = TestBed.get(AllFunctionService);
    expect(service).toBeTruthy();
  });
});

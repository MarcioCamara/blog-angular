import { TestBed } from '@angular/core/testing';

import { PostRegisterGuardService } from './post-register-guard.service';

describe('PostRegisterGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostRegisterGuardService = TestBed.get(PostRegisterGuardService);
    expect(service).toBeTruthy();
  });
});

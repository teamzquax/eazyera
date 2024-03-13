import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard] // Provide the AuthGuard
    });
    guard = TestBed.inject(AuthGuard); // Inject the AuthGuard for testing
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true for canActivate', () => {
    const route = {} as ActivatedRouteSnapshot;
    const state = {} as RouterStateSnapshot;
    // Replace 'true' with the actual expected result of your guard's canActivate method
    expect(guard.canActivate(route, state)).toBe(true);
  });

  // Add more tests as necessary
});

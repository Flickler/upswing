import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const studentGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return localStorage.getItem('student-acess-token')
    ? true
    : router.createUrlTree(['st', 'login']);
};

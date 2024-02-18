import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const companyGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return localStorage.getItem('company-acess-token')
    ? true
    : router.createUrlTree(['co', 'login']);
};

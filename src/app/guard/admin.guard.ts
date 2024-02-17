import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return localStorage.getItem('admin-acess-token')
    ? true
    : router.createUrlTree(['ad', 'login']);
};

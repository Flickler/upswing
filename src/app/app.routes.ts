import { Routes } from '@angular/router';

export const routes: Routes = [
  // LADING
  {
    path: '',
    loadComponent: () =>
      import('./landing/landing.component').then((c) => c.LandingComponent),
    pathMatch: 'full',
  },

  // ADMINISTRADOR
  {
    path: 'ad',
    loadComponent: () =>
      import('./admin/admin.component').then((c) => c.AdminComponent),
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        loadComponent: () =>
          import('./admin/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./admin/login/login.component').then((c) => c.LoginComponent),
      },
    ],
  },

  // ALUNO

  // CORPORATIVO
];

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
          import('./admin/pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        children: [
          {
            path: '',
            pathMatch: 'prefix',
            loadComponent: () =>
              import('./admin/components/home/home.component').then(
                (c) => c.HomeComponent
              ),
          },
          {
            path: 'register',
            loadComponent: () =>
              import('./admin/components/register/register.component').then(
                (c) => c.RegisterComponent
              ),
          },
          {
            path: 'admins',
            loadComponent: () =>
              import(
                './admin/components/admin-viewer/admin-viewer.component'
              ).then((c) => c.AdminViewerComponent),
          },
        ],
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./admin/pages/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
    ],
  },

  // ALUNO

  // CORPORATIVO
];

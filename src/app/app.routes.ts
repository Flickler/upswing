import { Routes } from '@angular/router';

export const routes: Routes = [
  // LANDING
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(
        (c) => c.LandingComponent
      ),
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
          import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        children: [
          {
            path: '',
            pathMatch: 'prefix',
            loadComponent: () =>
              import('./admin/home/home.component').then(
                (c) => c.HomeComponent
              ),
          },
          // PAGINAS DE CADASTRO DO ADMINISTRADOR
          {
            path: 'register',
            loadComponent: () =>
              import('./admin/register/register.component').then(
                (c) => c.RegisterComponent
              ),
            children: [
              {
                path: 'student',
                loadComponent: () =>
                  import(
                    './admin/register/register-student/register-student.component'
                  ).then((c) => c.RegisterStudentComponent),
              },
              {
                path: 'admin',
                loadComponent: () =>
                  import(
                    './admin/register/register-admin/register-admin.component'
                  ).then((c) => c.RegisterAdminComponent),
              },
              {
                path: 'course',
                loadComponent: () =>
                  import(
                    './admin/register/register-course/register-course.component'
                  ).then((c) => c.RegisterCourseComponent),
              },
              {
                path: 'class',
                loadComponent: () =>
                  import(
                    './admin/register/register-class/register-class.component'
                  ).then((c) => c.RegisterClassComponent),
              },
            ],
          },
          {
            path: 'admins',
            loadComponent: () =>
              import('./admin/admin-viewer/admin-viewer.component').then(
                (c) => c.AdminViewerComponent
              ),
          },
        ],
      },
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'login',
      },
      // PAGINA DE LOGIN
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then((c) => c.LoginComponent),
      },
    ],
  },

  // ALUNO

  // CORPORATIVO
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  // LANDING
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
      // DASHBOARD DO ADMINISTRADOR
      {
        path: '',
        pathMatch: 'prefix',
        loadComponent: () =>
          import('./admin/admin-dashboard/admin-dashboard.component').then(
            (c) => c.AdminDashboardComponent
          ),
        children: [
          // PAGINA CENTRAL DO ADMINISTRADOR
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
              {
                path: 'subject',
                loadComponent: () =>
                  import(
                    './admin/register/register-subject/register-subject.component'
                  ).then((c) => c.RegisterSubjectComponent),
              },
            ],
          },
          // PAGINAS DE VISUALIZAÇÃO DO ADMINISTRADOR
          {
            path: 'courses',
            loadComponent: () =>
              import(
                './admin/views/course-viewer/course-viewer.component'
              ).then((c) => c.CourseViewerComponent),
          },
          {
            path: 'classes',
            loadComponent: () =>
              import('./admin/views/class-viewer/class-viewer.component').then(
                (c) => c.ClassViewerComponent
              ),
          },
          {
            path: 'students',
            loadComponent: () =>
              import(
                './admin/views/student-viewer/student-viewer.component'
              ).then((c) => c.StudentViewerComponent),
          },
          {
            path: 'companies',
            loadComponent: () =>
              import(
                './admin/views/company-viewer/company-viewer.component'
              ).then((c) => c.CompanyViewerComponent),
          },
          {
            path: 'job-offers',
            loadComponent: () =>
              import(
                './admin/views/job-offer-viewer/job-offer-viewer.component'
              ).then((c) => c.JobOfferViewerComponent),
          },
          {
            path: 'admins',
            loadComponent: () =>
              import('./admin/views/admin-viewer/admin-viewer.component').then(
                (c) => c.AdminViewerComponent
              ),
          },
        ],
      },
      // PAGINA DE LOGIN DO ADMINISTRADOR
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
  {
    path: 'st',
    loadComponent: () =>
      import('./student/student.component').then((c) => c.StudentComponent),
    children: [
      // DASHBOARD DO ALUNO
      {
        path: '',
        pathMatch: 'prefix',
        loadComponent: () =>
          import(
            './student/student-dashboard/student-dashboard.component'
          ).then((c) => c.StudentDashboardComponent),
      },
      // PAGINA DE LOGIN DO ALUNO
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./student/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
    ],
  },
  // CORPORATIVO
  {
    path: 'co',
    loadComponent: () =>
      import('./company/company.component').then((c) => c.CompanyComponent),
    children: [
      // DASHBOARD DO ALUNO
      {
        path: '',
        pathMatch: 'prefix',
        loadComponent: () =>
          import(
            './company/company-dashboard/company-dashboard.component'
          ).then((c) => c.CompanyDashboardComponent),
      },
      // PAGINA DE LOGIN DO ALUNO
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'login',
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./company/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
    ],
  },
];

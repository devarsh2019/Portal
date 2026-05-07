import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'resourceAllocation',
    loadChildren: () =>
      import('resourceAllocation/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'employeeOnboarding',
    loadChildren: () =>
      import('employeeOnboarding/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('auth/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];

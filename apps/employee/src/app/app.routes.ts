import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: 'todo',
    loadChildren: () =>
      loadRemote<typeof import('todo/Routes')>('todo/Routes')
        .then((m) => m?.remoteRoutes ?? [])  // Return empty array if remoteRoutes is undefined
        .catch((err) => {
          console.error('Failed to load todo routes:', err);
          return [];  // Return empty array in case of failure
        }),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemote<typeof import('login/Routes')>('login/Routes')
        .then((m) => m?.remoteRoutes ?? [])  // Return empty array if remoteRoutes is undefined
        .catch((err) => {
          console.error('Failed to load login routes:', err);
          return [];  // Return empty array in case of failure
        }),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];

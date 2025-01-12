import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: 'todo',
    loadChildren: () =>
      loadRemote<typeof import('todo/Routes')>('todo/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      loadRemote<typeof import('login/Routes')>('login/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];

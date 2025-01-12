import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: AppComponent,
  },
];
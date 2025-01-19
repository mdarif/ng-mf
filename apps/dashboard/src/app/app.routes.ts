import { Route } from '@angular/router';
// import { loadRemote } from '@module-federation/enhanced/runtime';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'login',
    // Dynamically load remote routes using the updated `loadRemote` API
    loadChildren: () =>
      loadRemoteModule('login', './Routes').then((m) => m.remoteRoutes),
    // loadChildren: () =>
    //   loadRemote<typeof import('login/Routes')>('login/Routes').then(
    //     (m) => m?.remoteRoutes ?? []
    //   ),
  },
  {
    path: '',
    component: AppComponent,
  },
];

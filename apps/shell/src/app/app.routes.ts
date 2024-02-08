import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'remote2',
    loadChildren: () =>
      loadRemoteModule('remote2', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'remote1',
    loadChildren: () =>
      loadRemoteModule('remote1', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];

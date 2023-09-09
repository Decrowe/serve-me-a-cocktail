import { Routes } from '@angular/router';
import { LoggedInGuard } from './shared/utils/route-guards';
import { BarkeeperGuard } from './shared/utils/route-guards/barkeeper.guard';
import { LoginComponent } from '@components';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'barkeeper',
    loadComponent: () =>
      import('./application').then((m) => m.BarkeeperComponent),
    canActivate: [LoggedInGuard, BarkeeperGuard],
    children: [
      {path: '', pathMatch:'full', redirectTo: 'orders'},
      {
        path: 'orders',
        loadComponent: () =>
          import('./application').then((m) => m.OrdersComponent),
        canActivate: [LoggedInGuard, BarkeeperGuard],
      },

    ],
  },

  {
    path: 'guest',
    loadComponent: () =>
      import('./application').then((m) => m.GuestComponent),
    canActivate: [LoggedInGuard, LoggedInGuard],
    children: [
      {path: '', pathMatch:'full', redirectTo: 'cocktails'},
      {
        path: 'cocktails',
        loadComponent: () =>
          import('./application').then((m) => m.CocktailsComponent),
        canActivate: [LoggedInGuard],
      },
      
    ],
  },
  
  {
    path: 'cocktails',
    loadComponent: () =>
      import('./application').then((m) => m.CocktailsComponent),
    canActivate: [LoggedInGuard],
    children: [
      {
        path: 'edit',
        loadComponent: () =>
          import('./application').then((m) => m.CocktailsComponent),
        canActivate: [LoggedInGuard, BarkeeperGuard],
      },
    ],
  },
  { path: '**', redirectTo: 'login' },
];

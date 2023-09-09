import { Routes } from '@angular/router';
import { LoginComponent } from './application';
import { LoggedInGuard } from './shared/utils/route-guards';
import { BarkeeperGuard } from './shared/utils/route-guards/barkeeper.guard';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'orders',
    loadComponent: () => import('./application').then((m) => m.OrdersComponent),
    canActivate: [LoggedInGuard, BarkeeperGuard],
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
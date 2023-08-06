import { Routes } from '@angular/router';
import { LoginComponent } from './application';


export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'orders', 
    loadComponent: () => import('./application').then(m => m.OrdersComponent)
  },
  {
    path: 'cocktails', 
    loadComponent: () => import('./application').then(m => m.CocktailsComponent)
  },
  { path: '**', redirectTo: 'login' },
];

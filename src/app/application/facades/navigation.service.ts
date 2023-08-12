import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

export const enum APP_ROUTES {
  login = 'login',
  orders = 'orders',
  cocktails = 'cocktails',
  cocktailsEdit = 'cocktails/edit',
}

export type appRoute = 'login' | 'orders' | 'cocktails' | 'cocktails/edit';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly _router = inject(Router);

  public navigate(route: appRoute): void {
    this._router.navigateByUrl(route);
  }
}

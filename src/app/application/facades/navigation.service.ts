import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

export const enum APP_ROUTES {
  login = 'login',

  barkeeper = 'barkeeper',
  barkeeperOrders = 'barkeeper/orders',
  barkeeperCollection = 'barkeeper/collection',

  guest = 'guest',
  guestCocktails = 'guest/cocktails',
}

export type appRoute =
  | 'login'
  | 'barkeeper'
  | 'barkeeper/collection'
  | 'barkeeper/orders'
  | 'guest'
  | 'guest/cocktails';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly _router = inject(Router);

  private readonly _routed = new Subject<null>();
  public readonly routed$ = this._routed.asObservable();

  public navigate(route: appRoute): void {
    this._router.navigateByUrl(route);
    this._routed.next(null);
  }
}

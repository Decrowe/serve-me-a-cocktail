import { Injectable, OnDestroy, inject } from '@angular/core';
import { takeUntil, Subject } from 'rxjs';

import { Roles, User } from '@enteties';
import { APP_ROUTES, CocktailService, NavigationService, UserService } from '@facades';

@Injectable({
  providedIn: 'root',
})
export class CombineService implements OnDestroy {
  private readonly _userService = inject(UserService);
  private readonly _cocktailService = inject(CocktailService);
  private readonly _navi = inject(NavigationService);
  private readonly _destroyed = new Subject<void>();

  constructor() {
    this.initUserListener();
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  private initUserListener() {
    this._userService.user$
      .pipe(takeUntil(this._destroyed))
      .subscribe((user: User | undefined) => {
        if (!user) this.deleteFavorites();
        this.navigate(user);
      });
  }

  private deleteFavorites(): void {
    this._cocktailService.deleteFavorites();
  }

  private navigate(user: User | undefined): void {
    if (user === undefined) this._navi.navigate(APP_ROUTES.login);
    else if (user.role === Roles.guest)
      this._navi.navigate(APP_ROUTES.cocktails);
    else if (user.role === Roles.bartender)
      this._navi.navigate(APP_ROUTES.orders);
  }
}

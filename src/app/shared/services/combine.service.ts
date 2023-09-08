import { Injectable, inject } from '@angular/core';

import {
  CockatilSource,
  Cocktail,
  CocktailSources,
  Roles,
  User,
} from '@enteties';
import {
  APP_ROUTES,
  CocktailService,
  NavigationService,
  UserService,
} from '@facades';
import { PortalBridgeService } from './portal-bridge.service';
import { LogoutComponent } from 'src/app/application/features/logout/logout.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class CombineService {
  private readonly _userService = inject(UserService);
  private readonly _cocktailService = inject(CocktailService);
  private readonly _navi = inject(NavigationService);
  private readonly _portalBridge = inject(PortalBridgeService);

  constructor() {
    this.initUserListener();
    this.initCocktailSourceListener();
    this.initFavoritesListener();
  }

  private initUserListener() {
    this._userService.user$.subscribe((user: User | undefined) => {
      this.navigate(user);
      this._portalBridge.setHeaderPortalRight(user ?  new ComponentPortal(LogoutComponent) : undefined)
    });
  }

  private navigate(user: User | undefined): void {
    if (user === undefined) this._navi.navigate(APP_ROUTES.login);
    else if (user.role === Roles.guest)
      this._navi.navigate(APP_ROUTES.cocktails);
    else if (user.role === Roles.bartender)
      this._navi.navigate(APP_ROUTES.orders);
  }

  private initCocktailSourceListener() {
    this._cocktailService.cocktailSource$.subscribe(
      (source: CockatilSource) => {
        this.setCocktails(source);
      }
    );
  }

  private setCocktails(source: CockatilSource) {
    switch (source) {
      case CocktailSources.favorites:
        this._cocktailService.setCocktails(this._userService.favorites);
        break;
      default:
        this._cocktailService.setCocktails();
        break;
    }
  }

  private initFavoritesListener() {
    this._userService.favorites$.subscribe((favorites: Array<Cocktail>) => {
      if (favorites.length === 0) this._cocktailService.setCocktailSource(CocktailSources.all);
    });
  }
}

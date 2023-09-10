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
import { SidenavService } from './sidenav.service';

@Injectable({
  providedIn: 'root',
})
export class CombineService {
  private readonly _userService = inject(UserService);
  private readonly _cocktailService = inject(CocktailService);
  private readonly _navigationService = inject(NavigationService);
private readonly _sidenavService = inject(SidenavService)

  constructor() {
    this.initRoutedListener();
    this.initUserListener();
    this.initCocktailSourceListener();
    this.initFavoritesListener();
  }

  private initRoutedListener(): void {
    this._navigationService.routed$.subscribe(() => this._sidenavService.setSidenav(false))
  }

  private initUserListener(): void {
    this._userService.user$.subscribe((user: User | undefined) => {
      this.navigate(user);
    });
  }

  private navigate(user: User | undefined): void {
    if (user === undefined) this._navigationService.navigate(APP_ROUTES.login);
    else if (user.role === Roles.guest)
      this._navigationService.navigate(APP_ROUTES.guest);
    else if (user.role === Roles.barkeeper)
      this._navigationService.navigate(APP_ROUTES.barkeeper);
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

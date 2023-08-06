import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Cocktail, Roles } from 'src/app/shared/enteties';

import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/enteties/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _router = inject(Router);

  private readonly _user = new BehaviorSubject<User>({
    name: 'Guest',
    role: Roles.customer,
  });
  public readonly user$ = this._user.asObservable();

  private readonly _favorites = new BehaviorSubject<Array<Cocktail>>([]);
  public readonly favorites$ = this._favorites.asObservable();

  public get currentUser() {
    return this._user.getValue();
  }

  private navigate(): void {
    this._router.navigateByUrl(
      this._user.value.role === Roles.bartender ? 'orders' : 'cocktails'
    );
  }

  public login(user: User): void {
    this._user.next(user);
    this.navigate();
  }

  public addCocktailToFavorites(cocktail: Cocktail): void {
    if (this._favorites.value.includes(cocktail)) return;
    this._favorites.next([...this._favorites.value, cocktail]);
  }
}

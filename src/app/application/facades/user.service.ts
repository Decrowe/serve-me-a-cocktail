import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Cocktail } from '@enteties';


import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/enteties/user';



@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _router = inject(Router);

  private readonly _user = new BehaviorSubject<User | undefined>(undefined);
  public readonly user$ = this._user.asObservable();

  private readonly _favorites = new BehaviorSubject<Array<Cocktail>>([]);
  public readonly favorites$ = this._favorites.asObservable();
  public get favorites() {return this._favorites.value}

  public get currentUser() {
    return this._user.getValue();
  }



  public login(user: User): void {
    this._user.next(user);
  }

  public logout(): void {
    this._user.next(undefined);
    this._favorites.next([])
  }

  public isFavorized(cocktail: Cocktail): boolean {
    return this._favorites.value.includes(cocktail);
  }

  public addCocktailToFavorites(cocktail: Cocktail): void {
    if (this._favorites.value.includes(cocktail)) return;
    this._favorites.next([...this._favorites.value, cocktail]);
  }

  public deleteCocktailFromFavorites(cocktail: Cocktail) : void {
    const favorites = this._favorites.value;
    const index = favorites.indexOf(cocktail);
    favorites.splice(index,1);
    this._favorites.next(favorites);
  }
}

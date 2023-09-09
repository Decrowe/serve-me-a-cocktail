import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Cocktail } from 'src/app/shared/enteties';
import { CartService, CocktailService, UserService } from '@facades';
import {
  ButtonComponent,
  CartComponent,
  CocktailComponent,
  TriggerCocktailListComponent,
  TriggerFavoritesListComponent,
} from '@components';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    CocktailComponent,
    TriggerCocktailListComponent,
    TriggerFavoritesListComponent,
    CartComponent,
    ButtonComponent,
  ],
  templateUrl: './cocktails.component.html',
})
export class CocktailsComponent implements OnInit, OnDestroy {
  private readonly _cocktailService = inject(CocktailService);
  private readonly _cartService = inject(CartService);
  private readonly _userService = inject(UserService);

  private readonly _destroyed = new Subject<void>();

  public readonly cocktails$ = this._cocktailService.cocktails$;
  public readonly cocktailSource$ = this._cocktailService.cocktailSource$;

  ngOnInit(): void {
    this._cocktailService.updateCocktails();
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  public addCocktailToCart(cocktail: Cocktail): void {
    this._cartService.addCocktailToCart(cocktail);
  }

  public isFavorized(cocktail: Cocktail): boolean {
    return this._userService.isFavorized(cocktail);
  }

  public onFavorizedToggle(cocktail: Cocktail, favorized: boolean): void {
    favorized
      ? this.addToFavorites(cocktail)
      : this.removeFromFavorites(cocktail);
  }

  public addToFavorites(cocktail: Cocktail): void {
    this._userService.addCocktailToFavorites(cocktail);
  }

  public removeFromFavorites(cocktail: Cocktail): void {
    this._userService.deleteCocktailFromFavorites(cocktail);
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Cocktail } from 'src/app/shared/enteties';
import { CartService, CocktailService } from '@facades';
import { CocktailComponent } from '@components';
import { Subject } from 'rxjs';
import { TriggerCocktailListComponent } from '../trigger-cocktail-list/trigger-cocktail-list.component';
import { TriggerFavoritesListComponent } from '../trigger-favorite-list/trigger-favorite-list.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, CocktailComponent, TriggerCocktailListComponent,TriggerFavoritesListComponent, CartComponent],
  templateUrl: './cocktails.component.html',
})
export class CocktailsComponent implements OnInit, OnDestroy {
  private readonly _cocktailService = inject(CocktailService);
  private readonly _cartService = inject(CartService);

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
    return this._cocktailService.isFavorized(cocktail);
  }

  public onFavorizedToggle(cocktail: Cocktail, favorized: boolean): void {
    favorized
      ? this.addToFavorites(cocktail)
      : this.removeFromFavorites(cocktail);
  }

  public addToFavorites(cocktail: Cocktail): void {
    this._cocktailService.addCocktailToFavorites(cocktail);
  }

  public removeFromFavorites(cocktail: Cocktail): void {
    this._cocktailService.deleteCocktailFromFavorites(cocktail);
  }
}

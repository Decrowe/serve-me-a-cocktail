import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Cocktail } from '@enteties';
import { CocktailService, UserService } from '@facades';
import { map } from 'rxjs';

@Component({
  selector: 'app-trigger-favorites-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './trigger-favorite-list.component.html',
})
export class TriggerFavoritesListComponent {
  private readonly _cocktailService = inject(CocktailService);
  private readonly _userService = inject(UserService);

  public readonly favoritesCount$ = this._userService.favorites$.pipe(
    map((favorites: Array<Cocktail>) => favorites.length)
  );
  public readonly favoritesExist$ = this.favoritesCount$.pipe(
    map((count: number) => count > 0)
  );

  public loadFavorites(): void {
    this._cocktailService.setCocktailSource('Favorites');
  }
}

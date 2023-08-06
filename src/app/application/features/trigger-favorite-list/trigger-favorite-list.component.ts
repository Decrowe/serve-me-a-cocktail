import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Cocktail } from '@enteties';
import { CocktailComponent } from '@components';
import { CocktailService } from '@facades';
import { map } from 'rxjs';

@Component({
  selector: 'app-trigger-favorites-list',
  standalone: true,
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    CocktailComponent,  
  ],
  templateUrl: './trigger-favorite-list.component.html',
})
export class TriggerFavoritesListComponent {
  private readonly _cocktailService = inject(CocktailService);

  public readonly favorites$ = this._cocktailService.favorites$;
  public readonly favoritesCount$ = this.favorites$.pipe(
    map((favorites: Array<Cocktail>) => favorites.length)
  );
  public readonly favoritesExist$ = this.favoritesCount$.pipe(
    map((count: number) => count > 0)
  );

  public loadFavorites(): void {
    this._cocktailService.setCocktailSource('Favorites')
  }
}

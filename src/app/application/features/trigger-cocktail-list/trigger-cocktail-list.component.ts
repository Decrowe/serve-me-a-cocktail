import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CocktailComponent } from '@components';
import { CocktailService } from '../../facades/cocktail.service';

@Component({
  selector: 'app-trigger-cocktail-list',
  standalone: true,
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    CocktailComponent,  
  ],
  templateUrl: './trigger-cocktail-list.component.html',
})
export class TriggerCocktailListComponent {
  private readonly _cocktailService = inject(CocktailService)
  
  public loadAllCocktails(): void {
    this._cocktailService.setCocktailSource('All')
  }
}

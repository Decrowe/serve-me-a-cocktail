import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CocktailService } from '../../facades/cocktail.service';

@Component({
  selector: 'app-trigger-cocktail-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './trigger-cocktail-list.component.html',
})
export class TriggerCocktailListComponent {
  private readonly _cocktailService = inject(CocktailService)
  
  public loadAllCocktails(): void {
    this._cocktailService.setCocktailSource('All')
  }
}

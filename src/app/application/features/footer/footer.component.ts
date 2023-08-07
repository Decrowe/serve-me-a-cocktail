import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CartComponent, TriggerCocktailListComponent, TriggerFavoritesListComponent } from '@features';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    CartComponent,
    TriggerFavoritesListComponent,
    TriggerCocktailListComponent,
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent {}

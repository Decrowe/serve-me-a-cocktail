import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Cocktail } from 'src/app/shared/enteties';
import { CartService, CocktailService, UserService } from '@facades';
import { CocktailComponent } from '@components';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CocktailComponent,
  ],
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss'],
})
export class CocktailsComponent implements OnInit {
  private readonly _cocktailService = inject(CocktailService);
  private readonly _cartService = inject(CartService);
  private readonly _userService = inject(UserService);

  public readonly cocktails$ = this._cocktailService.cocktails$;
  

  ngOnInit(): void {
    this._cocktailService.updateCocktails();
  }

  public addCocktailToCart(cocktail: Cocktail): void {
    this._cartService.addCocktailToCart(cocktail);
  }

  public addToFavorites(cocktail: Cocktail): void {
    this._userService.addCocktailToFavorites(cocktail);
  }
}

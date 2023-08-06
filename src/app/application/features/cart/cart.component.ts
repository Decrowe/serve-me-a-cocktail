import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { OrderService } from '../../facades/order.service';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { CocktailWish } from '@enteties';
import { map } from 'rxjs';
import { CartService } from '../../facades/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatBottomSheetModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  private readonly _bottomSheet = inject(MatBottomSheet);
  private readonly _cartService = inject(CartService);

  public readonly cocktailWishCount$ = this._cartService.cart$.pipe(map((wishes: Array<CocktailWish>) => wishes.length))
  public readonly ordersExist$ = this.cocktailWishCount$.pipe(map((count: number) => count > 0))

  public openCart(): void {
    this._bottomSheet.open(BottomSheetComponent)
  }
}

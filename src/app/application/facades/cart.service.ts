import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderDataService as OrderDataService } from 'src/app/infrastructure/order.data.service';
import { Cocktail, CocktailWish } from '@enteties';
import {v4 as uuidv4} from 'uuid'


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly _orderDataService = inject(OrderDataService);

  private readonly _cart = new BehaviorSubject<Array<CocktailWish>>([]);
  public readonly cart$ = this._cart.asObservable();

  public addCocktailToCart(cocktail: Cocktail): void {
    this._cart.next([...this._cart.value, { cocktail, uuid: uuidv4() }]);
  }

  public deleteWish(wish: CocktailWish): void {
    const cart = this._cart.value;
    const index = cart.indexOf(wish);
    cart.splice(index, 1);
    this._cart.next(cart);
  }

  public updateWish(updatedWish: CocktailWish) {
    const index = this._cart.value.findIndex((wish: CocktailWish) => wish.uuid === updatedWish.uuid )

    this._cart.value[index].note = updatedWish.note;
  }
}

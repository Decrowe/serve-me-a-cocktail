import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, first } from 'rxjs';
import { Order } from 'src/app/shared/enteties/order';
import { OrderDataService as OrderDataService } from 'src/app/infrastructure/order.data.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly _orderDataService = inject(OrderDataService);

  private readonly _orders = new BehaviorSubject<Array<Order>>([]);
  public readonly orders$ = this._orders.asObservable();

  public updateOrders(): void {
    this._orderDataService
      .getOrders()
      .pipe(first())
      .subscribe((orders) => this._orders.next(orders));
  }
}
